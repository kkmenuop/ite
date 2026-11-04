export interface ActionType {
	name: string;
	color: string;
	waitTime: number;
}

type ActionTypes = Record<string, ActionType>;

export const actionTypes: ActionTypes = {
	discord: {
		name: 'Entrar no Discord',
		color: '#5865f2',
		waitTime: 3
	},
	like_comment: {
		name: 'Curtir e comentar',
		color: '#0077ff',
		waitTime: 5
	},
	subscribe: {
		name: 'Inscrever-se',
		color: '#ff0000',
		waitTime: 3
	}
};

