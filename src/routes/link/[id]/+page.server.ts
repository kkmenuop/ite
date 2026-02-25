import { links } from '$lib/links';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const linkInfo = links[params.id];
	if (!linkInfo) {
		error(404);
	}
	linkInfo.id = params.id
	return linkInfo;
}
