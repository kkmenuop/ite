<script lang="ts">
	import { browser } from '$app/environment';
	import type { Link, Action } from '$lib/links';
	import { actionTypes } from '$lib/types';
	import {
		createTaskProgress,
		watchTaskReturn,
		type Progress,
		type TaskProgress
	} from '$lib/task-progress';
	let { data }: { data: Link } = $props();

	let progress = $state<Progress>({ completed: [], pending: null });
	let tracker = $state<TaskProgress | null>(null);
	let remaining = $state(0);
	let message = $state('');
	let ready = $state(false);
	let actionsDone = $derived(progress.completed.length);
	let actionsToDo = $derived(data.actions.length);
	let currentAction = $derived(data.actions.find((action) => action.id === progress.pending?.id));
	let unlocked = $derived(ready && actionsDone === actionsToDo);

	const getIso = () =>
		new Intl.DateTimeFormat(undefined, {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(data.createdAt));

	function reconcile(manual = false) {
		const result = tracker?.resume(manual);
		remaining = Math.ceil((tracker?.remaining() ?? 0) / 1000);
		if (result === 'completed') message = 'Etapa concluída. Você já pode continuar.';
		else if (result === 'expired') message = 'Esta tentativa expirou. Abra a tarefa novamente.';
		else if (manual && result === 'waiting')
			message = `Aguarde mais ${remaining} segundo(s) e tente novamente.`;
	}

	// Reinitialize when SvelteKit reuses this page for a different link.
	$effect(() => {
		if (!browser) return;
		const link = data;
		ready = false;
		message = '';
		const next = createTaskProgress({
			key: `link-progress-${link.id}`,
			tasks: link.actions.map((action) => ({
				id: action.id,
				url: action.url,
				waitMs: actionTypes[action.type].waitTime * 1000
			})),
			storage: () => window.localStorage,
			onChange: (value) => {
				progress = value;
			}
		});
		tracker = next;
		next.restore();
		const stopWatching = watchTaskReturn(next, document, window, () => reconcile());
		// A reload may be the only observable return from the external app.
		next.resume();
		remaining = Math.ceil(next.remaining() / 1000);
		ready = true;
		const timer = window.setInterval(() => {
			// Display only: completion never depends on this timer firing in the background.
			remaining = Math.ceil(next.remaining() / 1000);
		}, 1000);
		return () => {
			stopWatching();
			window.clearInterval(timer);
		};
	});

	function handleClick(action: Action) {
		if (!tracker?.start(action.id)) return;
		message = 'Faça a tarefa na página aberta e depois volte aqui.';
		remaining = Math.ceil(tracker.remaining() / 1000);
		try {
			// Keep this synchronous with the tap. Listeners and saved state are already ready.
			const tab = window.open(action.url, '_blank');
			if (tab) tab.opener = null;
			else
				message =
					'Se a tarefa não abriu, toque em “Abrir nesta aba”. Se abriu no aplicativo, conclua e volte aqui.';
		} catch {
			message = 'Não foi possível abrir outra aba. Use “Abrir nesta aba”.';
		}
	}

	function cancelTask() {
		tracker?.cancel();
		remaining = 0;
		message = 'Tentativa cancelada. Escolha uma tarefa para continuar.';
	}
</script>

<div class="flex min-h-dvh w-full items-center justify-center bg-gray-900 px-4 py-6 text-white">
	<div class="flex w-full max-w-105 flex-col gap-2 overflow-hidden rounded-xl bg-gray-800">
		<img src={`/thumbnails/${data.imageUrl}`} alt={data.title} class="h-auto w-full" />
		<div class="flex flex-col items-center justify-center gap-3 p-4">
			<p class="text-center text-2xl font-bold">{data.title}</p>
			<p class="text-sm text-gray-400">Criado em {getIso()}</p>
			<p class="text-center text-sm text-gray-300">
				Abra cada tarefa, realize a ação e volte a esta página para continuar.
			</p>

			<div class="flex w-full flex-col items-center justify-center gap-1">
				<p aria-live="polite">{actionsDone} / {actionsToDo}</p>
				<div
					class="h-3 w-full overflow-hidden rounded-full bg-black"
					role="progressbar"
					aria-label="Etapas concluídas"
					aria-valuemin={0}
					aria-valuemax={actionsToDo || 1}
					aria-valuenow={actionsDone}
				>
					<div
						style={`width: ${actionsToDo ? (actionsDone / actionsToDo) * 100 : 100}%`}
						class="h-full rounded-full bg-blue-300 transition-all"
					></div>
				</div>
			</div>

			<div class="mt-3 flex w-full flex-col gap-3">
				{#each data.actions as action (action.id)}
					{@const done = progress.completed.includes(action.id)}
					<button
						disabled={!ready || done || !!progress.pending}
						onclick={() => handleClick(action)}
						class="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-3 py-2 font-bold disabled:cursor-default disabled:opacity-70"
						style={`background-color: ${done ? '#374151' : actionTypes[action.type].color}`}
					>
						{actionTypes[action.type].name}{done ? ' — concluída' : ''}
						{#if currentAction?.id === action.id}<span class="text-xs">Em andamento</span>{/if}
					</button>
				{/each}
			</div>

			{#if currentAction}
				<div class="flex w-full flex-col gap-2 rounded-lg border border-gray-600 p-3">
					<p class="text-center text-sm text-gray-200">
						Ao voltar, toque abaixo se a etapa não avançar automaticamente.
					</p>
					<button
						onclick={() => reconcile(true)}
						class="min-h-12 rounded-lg bg-blue-600 px-3 py-2 font-bold"
					>
						{remaining > 0 ? `Já fiz — aguarde ${remaining}s` : 'Já fiz — continuar'}
					</button>
					<!-- External task URL, not a SvelteKit route. -->
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={currentAction.url}
						onclick={() => tracker?.depart()}
						class="flex min-h-11 items-center justify-center rounded-lg border border-gray-500 px-3 py-2 text-center underline"
						>Abrir nesta aba</a
					>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
					<button
						onclick={cancelTask}
						class="min-h-11 rounded-lg px-3 py-2 text-sm text-gray-300 underline"
						>Cancelar tentativa</button
					>
				</div>
			{/if}

			<p role="status" class="text-center text-sm text-blue-200">{message}</p>
			<button
				disabled={!unlocked}
				onclick={() => {
					if (unlocked) window.location.assign(data.redirectUrl);
				}}
				class="min-h-12 w-full rounded-lg bg-green-600 px-3 py-2 font-bold transition-colors disabled:cursor-not-allowed disabled:bg-gray-700 disabled:font-medium disabled:text-gray-400"
			>
				{unlocked ? 'Acessar conteúdo' : 'Conclua as etapas para liberar'}
			</button>
		</div>
	</div>
</div>
