export interface ActionType {
	name: string;
	color: string;
	waitTime: number;
}

type ActionTypes = Record<string, ActionType>;

export const actionTypes: ActionTypes = {
	like_comment: {
		name: 'Like & Comment',
		color: '#0077ff',
		waitTime: 5
	},
	subscribe: {
		name: 'Subscribe',
		color: '#ff0000',
		waitTime: 3
	}
};
