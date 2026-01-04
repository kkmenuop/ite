// types
export interface Action {
  id: number;
  type: 'like_comment' | 'subscribe';
  url: string;
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
    imageUrl: 'thumb10.png',
    title: 'GPO Script',
    createdAt: '2025-12-30T04:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/0aKwnOfMOtir',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/O2La7e1RCHU',
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
   cccc: {
    imageUrl: 'thumb11.png',
    title: 'GPO SCRIPT',
    createdAt: '2026-01-01T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/sezbDlpoiT9O',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/lcO0mjveAoo',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  dddd: {
    imageUrl: 'thumb12.png',
    title: 'Dead Rails SCRIPT',
    createdAt: '2026-01-02T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/Hv2fdeYfDW2s',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Fg8tclqvT94',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    eeee: {
    imageUrl: 'thumb13.png',
    title: 'Devil hunter SCRIPT',
    createdAt: '2026-01-02T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/oDfaasVV3ax2',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/QSsGZPfFaOk',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
     ffff: {
    imageUrl: 'thumb14.png',
    title: 'Jailbreak SCRIPT',
    createdAt: '2026-01-03T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/tS8qKw94jA6i',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/EAWHeexQRk4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
};
