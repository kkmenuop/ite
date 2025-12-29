<script lang="ts">
	import type { Link, Action } from '$lib/links';
	import { actionTypes } from '$lib/types';
	import { onMount } from 'svelte';
	let { data }: { data: Link } = $props();

	const getIso = () => {
		const iso = data.createdAt;
		return new Intl.DateTimeFormat(undefined, {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(iso));
	};

	let actionsDone = $state(0);
	// svelte-ignore state_referenced_locally
	const actionsToDo = data.actions.length;

	// svelte-ignore state_referenced_locally
	let actions = $state<Action[]>(data.actions);
	let away = $state(false);
	let currentAction = $state<Action | null>(null);
	let startTime = 0;

	onMount(() => {
		const toggle = () => {
			away = document.hidden;
		};
		document.addEventListener('visibilitychange', toggle);
		return () => document.removeEventListener('visibilitychange', toggle);
	});

	async function handleClick(action: Action) {
		if (action.expired || currentAction) return;

		const tab = window.open(action.url, '_blank');
		if (!tab) return;

		currentAction = action;
		startTime = performance.now();

		await new Promise<void>((r) => {
			const check = () => {
				if (away) {
					document.removeEventListener('visibilitychange', check);
					r();
				}
			};
			document.addEventListener('visibilitychange', check);
			if (away) r();
		});

		await new Promise<void>((r) => {
			const check = () => {
				if (!away) {
					document.removeEventListener('visibilitychange', check);
					r();
				}
			};
			document.addEventListener('visibilitychange', check);
		});

		if (performance.now() - startTime >= actionTypes[action.type].waitTime * 1000) {
			action.expired = true;
			actionsDone++;
		}
		startTime = 0;
		currentAction = null;
	}
</script>

<div class="flex size-full items-center justify-center bg-gray-900 text-white">
	<div
		class="flex w-105 max-w-[calc(100%-32px)] flex-col gap-2 overflow-clip rounded-xl bg-gray-800"
	>
		<img src={`/thumbnails/${data.imageUrl}`} alt={data.title} />
		<div class="flex flex-col items-center justify-center gap-3 p-3">
			<p class="text-center text-2xl font-bold">
				{data.title}
			</p>
			<p class="text-sm text-gray-500">
				Made {getIso()}
			</p>

			<div class="flex w-full flex-col items-center justify-center gap-1">
				<p>
					{actionsDone} / {actionsToDo}
				</p>
				<div class="h-4 w-full rounded-full bg-black">
					<div
						style={`width: ${Math.max((actionsDone / actionsToDo) * 100, 5)}%`}
						class="anim h-full rounded-full bg-blue-300 transition-all"
					></div>
				</div>
			</div>

			<div class="mt-3 flex w-full flex-col items-center justify-center gap-3">
				{#each actions as action (action.id)}
					<button
						disabled={action.expired}
						onclick={() => handleClick(action)}
						aria-label={actionTypes[action.type].name}
						class={[
							'rounded-3 flex h-12 w-full items-center justify-center gap-2 rounded-lg font-bold',
							{
								'cursor-default bg-gray-700 text-gray-400': action.expired,
								'cursor-pointer': !action.expired
							}
						]}
						style={`background-color: ${action.expired ? '' : actionTypes[action.type].color}`}
					>
						{actionTypes[action.type].name}
						{#if currentAction?.id === action.id}
							<img src="/icons/loading.svg" alt="" class="size-6 animate-spin" />
						{/if}
					</button>
				{/each}
			</div>
			<button
				disabled={actionsDone !== actionsToDo}
				onclick={() => {
					if (actionsDone === actionsToDo) window.open(data.redirectUrl);
				}}
				class={[
					'rounded-3 h-12 w-full rounded-lg font-bold transition-all duration-300',
					{
						'cursor-not-allowed bg-gray-700 font-medium text-gray-400': actionsDone !== actionsToDo,
						'cursor-pointer bg-green-600': actionsDone === actionsToDo
					}
				]}
			>
				{actionsDone === actionsToDo ? 'Unlock content' : 'Complete all steps to unlock'}
			</button>
		</div>
	</div>
</div>

<style>
	@keyframes anim-sus {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0.7;
		}
	}

	.anim {
		animation: anim-sus 2s infinite ease-in-out;
	}
</style>
