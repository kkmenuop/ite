export interface Action {
	id: number;
	type: string;
	url: string;
	expired?: boolean;
}

export interface Link {
	imageUrl: string;
	title: string;
	createdAt: string;
	actions: Action[];
}

type Links = Record<string, Link>;

const links: Links = {
	aaaa: {
		imageUrl: 'jujutsuzero.png',
		title: 'Jujutsu: Zero Script Omg IF U READ THIS U ARE GAY',
		createdAt: '2025-12-28T04:52:49.706Z',
		actions: [
			{
				id: 1,
				type: 'like_comment',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
			},
			{
				id: 2,
				type: 'subscribe',
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
			}
		]
	}
};

export default links;
