// This is a client-side visit/wait gate, not proof of a YouTube interaction.
export const PROGRESS_TTL = 10 * 60 * 1000;

export interface Task {
	id: number;
	url: string;
	waitMs: number;
}

export interface PendingTask {
	id: number;
	startedAt: number;
	departed: boolean;
}

export interface Progress {
	completed: number[];
	pending: PendingTask | null;
}

type StorageAccess = () => Pick<Storage, 'getItem' | 'setItem'>;

export function createTaskProgress(options: {
	key: string;
	tasks: Task[];
	storage: StorageAccess;
	now?: () => number;
	onChange: (progress: Progress) => void;
}) {
	const now = options.now ?? Date.now;
	const signature = JSON.stringify(options.tasks);
	const tasks = new Map(options.tasks.map((task) => [task.id, task]));
	let progress: Progress = { completed: [], pending: null };

	function publish() {
		options.onChange({
			completed: [...progress.completed],
			pending: progress.pending ? { ...progress.pending } : null
		});
	}

	function save() {
		try {
			options
				.storage()
				.setItem(
					options.key,
					JSON.stringify({ version: 1, signature, timestamp: now(), ...progress })
				);
		} catch {
			// Private browsing, quota or disabled storage must not block this visit.
		}
		publish();
	}

	function restore() {
		progress = { completed: [], pending: null };
		try {
			const raw = options.storage().getItem(options.key);
			const saved = raw ? JSON.parse(raw) : null;
			const age = saved ? now() - saved.timestamp : NaN;
			if (saved && Number.isFinite(saved.timestamp) && age >= 0 && age <= PROGRESS_TTL) {
				const current = saved.version === 1 && saved.signature === signature;
				const legacy = saved.version === undefined && Array.isArray(saved.expiredIds);
				const completed = current ? saved.completed : legacy ? saved.expiredIds : [];
				if (Array.isArray(completed)) {
					progress.completed = [...new Set<number>(completed)].filter((id) => tasks.has(id));
				}
				const pending = current ? saved.pending : null;
				if (
					pending &&
					tasks.has(pending.id) &&
					!progress.completed.includes(pending.id) &&
					Number.isFinite(pending.startedAt) &&
					pending.startedAt <= now() &&
					now() - pending.startedAt <= PROGRESS_TTL &&
					typeof pending.departed === 'boolean'
				) {
					progress.pending = { ...pending };
				}
			}
		} catch {
			// Malformed/unsupported storage is treated as a fresh visit.
		}
		publish();
	}

	function start(id: number) {
		if (!tasks.has(id) || progress.completed.includes(id) || progress.pending) return false;
		progress.pending = { id, startedAt: now(), departed: false };
		// Persist before opening a window or handing navigation to a native app.
		save();
		return true;
	}

	function depart() {
		if (!progress.pending || progress.pending.departed) return;
		progress.pending.departed = true;
		save();
	}

	function remaining() {
		const pending = progress.pending;
		if (!pending) return 0;
		return Math.max(0, (tasks.get(pending.id)?.waitMs ?? 0) - (now() - pending.startedAt));
	}

	function resume(manual = false): 'idle' | 'waiting' | 'completed' | 'expired' {
		const pending = progress.pending;
		if (!pending) return 'idle';
		const age = now() - pending.startedAt;
		if (age < 0 || age > PROGRESS_TTL) {
			progress.pending = null;
			save();
			return 'expired';
		}
		// Manual confirmation is the fallback for browsers that miss lifecycle events.
		if ((!manual && !pending.departed) || remaining() > 0) return 'waiting';
		progress.completed = [...new Set([...progress.completed, pending.id])];
		progress.pending = null;
		save();
		return 'completed';
	}

	function cancel() {
		progress.pending = null;
		save();
	}

	return { restore, start, depart, remaining, resume, cancel };
}

export type TaskProgress = ReturnType<typeof createTaskProgress>;

export function watchTaskReturn(
	progress: TaskProgress,
	page: Pick<Document, 'hidden' | 'addEventListener' | 'removeEventListener'>,
	view: Pick<Window, 'addEventListener' | 'removeEventListener'>,
	onReturn: () => void
) {
	const depart = () => progress.depart();
	const resume = () => {
		if (!page.hidden) onReturn();
	};
	const visibility = () => (page.hidden ? depart() : resume());
	page.addEventListener('visibilitychange', visibility);
	view.addEventListener('blur', depart);
	view.addEventListener('focus', resume);
	view.addEventListener('pagehide', depart);
	view.addEventListener('pageshow', resume);
	return () => {
		page.removeEventListener('visibilitychange', visibility);
		view.removeEventListener('blur', depart);
		view.removeEventListener('focus', resume);
		view.removeEventListener('pagehide', depart);
		view.removeEventListener('pageshow', resume);
	};
}
