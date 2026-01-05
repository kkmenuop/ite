// types
export interface Action {
  id: number;
  type: 'like_comment' | 'subscribe';
  url: string;
  expired?: boolean;
}

export interface Link {
  imageUrl: string;
  title: string;
  createdAt: string;
  redirectUrl: string;
  actions: Action[];
}

type Links = Record<string, Link>;

// data
export const links: Links = {
  aaaa: {
    imageUrl: 'jujutsuzero.png',
    title: 'Jujutsu Zero Script OMG IF U READ THIS U ARE GAY',
    createdAt: '2025-12-28T04:52:49.706Z',
    redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },

  bbbb: {
    imageUrl: 'thumb9.png',
    title: 'King Legacy SCRIPT',
    createdAt: '2025-12-28T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/VOwkwcu0bENH',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/2YvG2j7UfAo',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
};
