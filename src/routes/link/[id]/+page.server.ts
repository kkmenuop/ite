import { links } from '$lib/links';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const linkInfo = links[params.id];
	if (!linkInfo) {
		error(404);
	}
	// Include the community task for current and future links without duplicating it.
	const actions = linkInfo.actions.some((action) => action.type === 'discord')
		? linkInfo.actions
		: [
				...linkInfo.actions,
				{
					id: Math.max(0, ...linkInfo.actions.map((action) => action.id)) + 1,
					type: 'discord' as const,
					url: 'https://discord.gg/kakazit-community-845719485653581834'
				}
			];
	return { ...linkInfo, actions, id: params.id };
}

