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
  gggg: {
    imageUrl: 'thumb.png',
    title: 'Grand Piece Online SCRIPT',
    createdAt: '2026-01-04T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/0d6yf2rywvq4k1b/Gpo2+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/o96LgpE6DMY',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  hhhh: {
    imageUrl: 'thumb1.png',
    title: 'Anime Fighting Simulator SCRIPT',
    createdAt: '2026-01-05T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/7tmu1ispzgnm7pi/Anime+Fighting+Simulator+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/JN2FeVtqJV4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   iiii: {
    imageUrl: 'thumb2.png',
    title: 'Devil Hunter SCRIPT',
    createdAt: '2026-01-06T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ekyayy3ysdvcgu0/Devil+hunter+2+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/PbfORlyqe08',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
     jjjj: {
    imageUrl: 'thumb3.png',
    title: 'REDZHUB SCRIPT',
    createdAt: '2026-01-07T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/x5qp4ajjnvfa1pb/redz+blox+fruits+janeiro+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/yCYg-4bxpo4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
};
