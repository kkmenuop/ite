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
  kkkk: {
    imageUrl: 'thumb4.png',
    title: 'Brookhaven SCRIPT',
    createdAt: '2026-01-08T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/9nloz8hnwqcseih/brookhaven+rp+sander+2026+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Zavk1q4i83o',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  llll: {
    imageUrl: 'thumb5.png',
    title: 'MM2 SCRIPT',
    createdAt: '2026-01-09T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/nnynkjmew76mz90/mm2_2026_by_kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/X_uCBp0oN18',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   mmmm: {
    imageUrl: 'thumb6.png',
    title: 'Escape Tsunami For Brainrots SCRIPT',
    createdAt: '2026-01-10T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ym8hgwnjj2ji1wr/Escape+Tsunami+For+Brainrots+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/5Bc6ed6uvc0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   nnnn: {
    imageUrl: 'thumb7.png',
    title: 'Escape Tsunami For Brainrots SCRIPT',
    createdAt: '2026-01-11T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/e6sih4ogl4a1pyu/Escape+Tsunami+For+Brainrots+Script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/YTBm53xkJW8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    oooo: {
    imageUrl: 'thumb8.png',
    title: 'Escape Tsunami For Brainrots SCRIPT',
    createdAt: '2026-01-12T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/dir4su8mkf9l3wh/Escape_Tsunami_By_Kakazitg.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/_fjahLnKp_A',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   pppp: {
    imageUrl: 'thumb99.png',
    title: 'Escape Tsunami For Brainrots SCRIPT',
    createdAt: '2026-01-13T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/iju1lkwq858syyv/sscape+tsunami+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/VAAtDxmjdsQ',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
};
