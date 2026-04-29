// types
export interface Action {
  id: number;
  type: 'like_comment' | 'subscribe';
  url: string;
    expired?: boolean;
}

export interface Link {
  id?: string;
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
     rrrr: {
    imageUrl: 'thumb100.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-01-14T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/9g7d4z2og4hh2ep/bloxfruitss+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/zFOYkGCWtYI',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ssss: {
    imageUrl: 'thumb101.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-15T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/7j1gjebto3tdppz/EScappe+tsunami+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/4vgfjhUc7nY',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    qqqq: {
    imageUrl: 'thumb102.png',
    title: 'Natural Disaster Survivel SCRIPT',
    createdAt: '2026-01-16T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/w4193actzojxbtc/Natural+Disaster+Survivel+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ehihcnXiAJ0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  tttt: {
    imageUrl: 'thumbb.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-17T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ckb619u6hourtwb/BlessedHub+ByKAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/6Wlct3st0-c',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  uuuu: {
    imageUrl: 'thumbb1.png',
    title: 'MM2 SCRIPT',
    createdAt: '2026-01-18T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/c6rff1sgxulo8qc/mm2+echelon.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/yLKpwZ4L2ak',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  vvvv: {
    imageUrl: 'thumbb2.png',
    title: 'Steal a Brainrot SCRIPT',
    createdAt: '2026-01-19T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/eke5806iysgc8pc/steal+a+brainrot+2026.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/9wIY5JhaSdo',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  wwww: {
    imageUrl: 'thumbb3.png',
    title: 'Car Dealership Tycoon SCRIPT',
    createdAt: '2026-01-19T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/j7g4m03l0p9h6u5/Car+Dealership+Tycoon+2026+By+KAKAiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/UMlVzItnDHc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  aa: {
    imageUrl: 'thumbb5.png',
    title: 'Jujutsu shenanigans SCRIPT',
    createdAt: '2026-01-20T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/un6dpwqoruf8vcq/jujutsu+shenanigans+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/mlsmlH7nIzc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  bb: {
    imageUrl: 'thumbb4.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-21T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/eu7lck1zjm0aker/Escape+Tesunami+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/R5gefY0V5xM',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    cc: {
    imageUrl: 'thumbb6.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-24T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/uo6eddpns0nhty4/Escape+Tsunami+For+Brainrots+script+2026+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/RuPOAoyOGAA',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    dd: {
    imageUrl: 'thumbb7.png',
    title: 'Solo Hunters SCRIPT',
    createdAt: '2026-01-26T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/sr3hc768ptfwas1/Solo+Hunters+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Z7CbuOyj718',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ee: {
    imageUrl: 'thumbb8.png',
    title: 'Solo Hunters SCRIPT',
    createdAt: '2026-01-27T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/vdxv0lpg1zsae00/Solo+Hunters+script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/N0MYMrN03Hg',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ff: {
    imageUrl: 'thumbb9.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-28T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/siz04hztd49tsir/Ocean+X+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/MXBEIByFGIs',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  gg: {
    imageUrl: 'thumbb10.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-01-29T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/38o60xu4vy5ovef/esccape+tsunami+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/FLHzzWGTU0Q',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    hh: {
    imageUrl: 'thumbb11.png',
    title: 'Delta Executor',
    createdAt: '2026-01-30T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/anjv9t2jzs18hcl/DELTA+ANDROID+-+KAKAZIT.apk/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/FLHzzWGTU0Q',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ii: {
    imageUrl: 'thumbb12.png',
    title: 'Solo Hunters SCRIPT By KAKAZiT',
    createdAt: '2026-01-31T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/y6s2i7gqlz9sm72/Soo+Hunters+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/O3y8InDjUxY',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  jj: {
    imageUrl: 'thumbb13.png',
    title: 'Brookhaven SCRIPT By KAKAZiT',
    createdAt: '2026-01-31T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ryskjs579giksf9/brookhaven+rpp+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/bHG4HVgw55Y',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   kk: {
    imageUrl: 'thumbb14.png',
    title: 'Escape Tsunami SCRIPT By KAKAZiT',
    createdAt: '2026-02-01T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/pu36o6q8bntc1dt/sscape+tsuinami+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/W9Wdr2b4znc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ll: {
    imageUrl: 'thumbb15.png',
    title: 'Escape Tsunami SCRIPT By KAKAZiT',
    createdAt: '2026-02-03T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/pu36o6q8bntc1dt/sscape+tsuinami+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/oQjBRXFJk_c',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   mm: {
    imageUrl: 'thumbb16.png',
    title: 'Solo Hunters SCRIPT By KAKAZiT',
    createdAt: '2026-02-04T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/v0qvwn3o6dtenek/solo_hunterss_by_kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/F_X5jpR9bt0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   nn: {
    imageUrl: 'thumbb17.png',
    title: 'mm2 SCRIPT By KAKAZiT',
    createdAt: '2026-02-06T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/wtogoahwu42tflg/murder2+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/OwaVhuCFelw',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  oo: {
    imageUrl: 'thumbb18.png',
    title: 'escape tsunami SCRIPT By KAKAZiT',
    createdAt: '2026-02-08T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/1lxrulpvg4fulw5/esacape+tsunami+for+brainrots+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/eQc_Hqv3eWw',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  pp: {
    imageUrl: 'thumbb19.png',
    title: 'jjs SCRIPT By KAKAZiT',
    createdAt: '2026-02-09T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/6jbzr1jayjuuxc7/jjs+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/n2aR6hdaROs',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  qq: {
    imageUrl: 'thumbb20.png',
    title: 'Abyss SCRIPT By KAKAZiT',
    createdAt: '2026-02-10T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/nbc3hb596yrmfw1/abyss+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ClcAr-w7fk0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  rr: {
    imageUrl: 'thumbb21.png',
    title: 'King Legacy SCRIPT By KAKAZiT',
    createdAt: '2026-02-11T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/sl34ubxqfohbnnb/king+legacy+byy+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/wIkZSxtDrSI',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
 ss: {
    imageUrl: 'thumbb22.png',
    title: 'Abyss SCRIPT By KAKAZiT',
    createdAt: '2026-02-12T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/xi6ppfwmpj2p2hn/Abysss+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/kPzB8vXfRM8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   tt: {
    imageUrl: 'thumbb23.png',
    title: 'Anime Vanguards SCRIPT By KAKAZiT',
    createdAt: '2026-02-12T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/teo49h5bml985sd/anime+vanguards+by+kakait.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/04U06mQ3DuA',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    vv: {
    imageUrl: 'thumbb24.png',
    title: 'Demonfall SCRIPT By KAKAZiT',
    createdAt: '2026-02-14T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/jrm7z2itv21ymtv/demonfall+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://www.youtube.com/watch?v=QSj8pWGaIyg',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  uu: {
    imageUrl: 'thumbb25.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-02-15T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/gdybziujks8t0k5/blox+fruits+evento+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Hxu3moJGT58',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ww: {
    imageUrl: 'thumbb26.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-02-15T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/qzaskb6zvck7ugx/escape+rexbr+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/nLcLgVH2UXE',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   yy: {
    imageUrl: 'thumbb27.png',
    title: 'Kaizen SCRIPT',
    createdAt: '2026-02-18T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/1zols4vkhuvgh5g/kaizen+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/MCraL4U1HJg',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  zz: {
    imageUrl: 'thumbb28.png',
    title: 'Kaizen SCRIPT',
    createdAt: '2026-02-19T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/eowmmfghvvpbbsw/kaizen+2+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/MCraL4U1HJg',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  a: {
    imageUrl: 'thumbb29.png',
    title: 'Anime Final Quest SCRIPT',
    createdAt: '2026-02-20T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/gnog2013ghw86rl/Anime+Final+Quest+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ATZuMk4a348',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  b: {
    imageUrl: 'thumbb30.png',
    title: 'Murder Mystery 2 SCRIPT',
    createdAt: '2026-02-20T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/1yqr85msur3acsg/mm2+fevereiro+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/UdPvHV_uL2A',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   c: {
    imageUrl: 'thumbb31.png',
    title: 'Brookhaven RP SCRIPT',
    createdAt: '2026-02-22T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/dyzc15zcm79ad8k/brookhaven+sander+fevereiro+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/UdPvHV_uL2A',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  d: {
    imageUrl: 'thumbb32.png',
    title: 'Garden Horizons SCRIPT',
    createdAt: '2026-02-23T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/5o7n2t1v1oyq4tc/Garden+Horizon+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/CI4u2hgYkko',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  e: {
    imageUrl: 'thumbb33.png',
    title: 'Kaizen SCRIPT',
    createdAt: '2026-02-24T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/551y2z2ni3je0wy/kaizen+script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/1gbsGjL7bS4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   f: {
    imageUrl: 'thumbb34.png',
    title: 'Anime Ghost SCRIPT',
    createdAt: '2026-02-25T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/huril692cupmao8/anime+ghost+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ndn7q9OYx04',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  g: {
    imageUrl: 'thumbb35.png',
    title: 'JJS SCRIPT',
    createdAt: '2026-02-26T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/gs2dbvpelg3yvlq/jjs+script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/O6WtQkwVc5w',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  h: {
    imageUrl: 'thumbb36.png',
    title: 'Grow Beanstalk  SCRIPT',
    createdAt: '2026-02-27T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/u4dluguelmj4513/Grow+Beanstalk+For+Brainrots+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/DkHLm9J4p-o',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  i: {
    imageUrl: 'thumbb37.png',
    title: 'Escape Tsunami SCRIPT',
    createdAt: '2026-02-28T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/sd9wsxk1vin86sz/Escape+Tsunami+Unreal+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/yiGbELiqPu4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  j: {
    imageUrl: 'thumbb38.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-02-28T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/0w34ea57xl8nol2/bizarre+lineage+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/kysNv5KZJ_8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  k: {
    imageUrl: 'thumbb39.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-01T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/5ne4d5kxm1la0gb/bizarre+lineage+script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/z-PXMEsvEgs',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  l: {
    imageUrl: 'thumbb40.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-03T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ag9q6nupm8mgg4d/bizarre+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/JLrX_gwj3Wc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  m: {
    imageUrl: 'thumbb41.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-04T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/4mat18ofuerd7vs/bizarre+script+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/84NrF7dqVfM',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  n: {
    imageUrl: 'thumbb42.png',
    title: 'murder mystery 2 SCRIPT',
    createdAt: '2026-03-04T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/mgj4fw28bq4qpcv/mm2+março+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/a6AFJAX1uHM',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   o: {
    imageUrl: 'thumbb43.png',
    title: 'Titan Finishing SCRIPT',
    createdAt: '2026-03-06T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/axsub9r9q8y899v/Titan+Fishing+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/LyrPdtjiFBE',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  p: {
    imageUrl: 'thumbb44.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-07T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/vzxz6l9hpw4sm8r/bizarrre+lineage+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/CUSnksIQrck',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  q: {
    imageUrl: 'thumbb45.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-08T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/wktp2doig1kix43/bbizarre+lineage+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://www.youtube.com/watch?v=quYYhws8kNs',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  r: {
    imageUrl: 'thumbb46.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-09T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/rz9nqi97zi42yjq/bbbbizarre+lineage+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ENBQZhVZkQQ',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  s: {
    imageUrl: 'thumbb47.png',
    title: 'King legacy SCRIPT',
    createdAt: '2026-03-09T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/ylf13unkvpijp99/king+legacyyy+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ix50k3ooI9c',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  t: {
    imageUrl: 'thumbb48.png',
    title: 'Sailor Piece SCRIPT',
    createdAt: '2026-03-10T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/9gejsq8cqgteafl/Sailor+Piece+By+KAKAZiT.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/rrOmuk4uMpw',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   u: {
    imageUrl: 'thumbb49.png',
    title: 'King Legacy SCRIPT',
    createdAt: '2026-03-13T23:52:49.706Z',
    redirectUrl: 'https://www.mediafire.com/file/42qw0wmt3znmyjq/king+legacy+10+by+kakazit.txt/file',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/XO_VpsOB2vM',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  v: {
    imageUrl: 'thumbb50.png',
    title: 'Sailor Piece SCRIPT',
    createdAt: '2026-03-13T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/AWL8vK5FoX0g',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/2OIJSf9rh7s',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  w: {
    imageUrl: 'thumbb51.png',
    title: 'King Legacy UPD10 SCRIPT',
    createdAt: '2026-03-13T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/UIPn8UWj0v8p',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Kk2K6zojLTU',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  y: {
    imageUrl: 'thumbb52.png',
    title: 'JJS SCRIPT',
    createdAt: '2026-03-13T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/8leSSRsBYJb2',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/qllbkeeWhYA',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  z: {
    imageUrl: 'thumbb53.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-03-18T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/zLyKAtnSheSL',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/OTER8qdulVo',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   zp: {
    imageUrl: 'thumbb54.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-03-19T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/6c4cKkwQrcF9',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/OTER8qdulVo',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   aaa: {
    imageUrl: 'thumbb55.png',
    title: 'Survive the Apocalypse SCRIPT',
    createdAt: '2026-03-23T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/84NhnMYWEHTk',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/HN89cUsD2U4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  bbb: {
    imageUrl: 'thumbb56.png',
    title: 'JJS SCRIPT',
    createdAt: '2026-03-23T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/SVHHhTSu2x3y',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/B5E2zACTF8s',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ccc: {
    imageUrl: 'thumbb57.png',
    title: 'king legacy SCRIPT',
    createdAt: '2026-03-23T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/B01IkGjhUlBm',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/BkRLTCymfhg',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ddd: {
    imageUrl: 'thumbb58.png',
    title: 'Sailor Piece SCRIPT',
    createdAt: '2026-03-25T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/QNlTtVH66WM0',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/qVWekzlf44Y',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  eee: {
    imageUrl: 'thumbb59.png',
    title: 'JJS SCRIPT',
    createdAt: '2026-03-26T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/RPFS8nSUI4sV',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/vj5rp82kujM',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  fff: {
    imageUrl: 'thumbb60.png',
    title: 'mm2 SCRIPT',
    createdAt: '2026-03-28T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/I1JrctGjLThj',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/MfzAReOn-d0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ggg: {
    imageUrl: 'thumbb61.png',
    title: 'blox fruits SCRIPT',
    createdAt: '2026-03-29T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/vavLOLJy5pkV',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/KMCBr_Vi27E',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
    hhh: {
    imageUrl: 'thumbb62.png',
    title: 'blox fruits SCRIPT',
    createdAt: '2026-03-30T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/qJ2drHbESbXJ',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/XBvHJxFrESc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  iii: {
    imageUrl: 'thumbb63.png',
    title: 'Bite By Night SCRIPT',
    createdAt: '2026-03-31T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/QSJ5CyDBiLFV',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/P-H4a2dVUU8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   jjj: {
    imageUrl: 'thumbb64.png',
    title: 'King Legacy SCRIPT',
    createdAt: '2026-03-31T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/aMPIovsas5Dw',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/k2MHIyYbVvE',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  kkk: {
    imageUrl: 'thumbb65.png',
    title: 'Be a Lucky Block SCRIPT',
    createdAt: '2026-04-01T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/1FRRB6q26yk1',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/ZEeIAcF9-Y8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  lll: {
    imageUrl: 'thumbb66.png',
    title: 'King legacy SCRIPT',
    createdAt: '2026-04-03T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/0PgrlX4FemmY',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/MHF9KNAYgOw',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  mmm: {
    imageUrl: 'thumbb67.png',
    title: 'Brookhaven RP SCRIPT',
    createdAt: '2026-04-04T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/JXYcOGnU2nzM',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/lctrTwBaKds',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  nnn: {
    imageUrl: 'thumbb68.png',
    title: 'Be a Lucky Block SCRIPT',
    createdAt: '2026-04-04T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/PhhHer8OcopV',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Vm0wQKyDHbE',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ooo: {
    imageUrl: 'thumbb69.png',
    title: 'King Legacy SCRIPT',
    createdAt: '2026-04-06T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/9xI8AkHXAmHW',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/BottKIeC15c',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ppp: {
    imageUrl: 'thumbb70.png',
    title: 'Bite By Night SCRIPT',
    createdAt: '2026-04-06T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/ApMgIsDuijpb',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/LtMBPH2-BEk',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   qqq: {
    imageUrl: 'thumbb71.png',
    title: 'Brookhaven SCRIPT',
    createdAt: '2026-04-08T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/GWQMo4B7LD45',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/kwUn9mJXWY0',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   rrr: {
    imageUrl: 'thumbb72.png',
    title: 'King legacy SCRIPT',
    createdAt: '2026-04-08T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/Rct7csGSLV67',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/R_JQB9Z8huI',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  sss: {
    imageUrl: 'thumbb73.png',
    title: 'Sailor Piece SCRIPT',
    createdAt: '2026-04-09T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/ptlQq8ng8PxW',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/uD1-JBT_bPU',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ttt: {
    imageUrl: 'thumbb74.png',
    title: 'Paradox SCRIPT',
    createdAt: '2026-04-10T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/9wOTat2I5Jsj',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/kcUtk8470c4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  uuu: {
    imageUrl: 'thumbb75.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-04-11T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/cCDHND2LfuPp',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/8vB76rf-UY8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  vvv: {
    imageUrl: 'thumbb76.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-04-12T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/EY10JYO0xe5X',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/5IIA-7-7KrI',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  www: {
    imageUrl: 'thumbb77.png',
    title: 'Paradox SCRIPT',
    createdAt: '2026-04-13T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/bduhsIjhpTyq',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/jgEg869LhSw',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  yyy: {
    imageUrl: 'thumbb78.png',
    title: 'Survive the Apocalypse SCRIPT',
    createdAt: '2026-04-14T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/GrTHqHlcY312',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/VdvnKjWD51Y',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  zzz: {
    imageUrl: 'thumbb79.png',
    title: 'Paradoxo SCRIPT',
    createdAt: '2026-04-15T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/zAXiKPzM14zx',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/yfrsD1hoRM4',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  zzzzz: {
    imageUrl: 'thumbb80.png',
    title: 'Blox Fruits SCRIPT',
    createdAt: '2026-04-16T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/HawTt4mhyE8V',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Wm7xIKWPQPU',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ab: {
    imageUrl: 'thumbb81.png',
    title: 'Sailor Piece SCRIPT',
    createdAt: '2026-04-17T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/WqrizvfdbQsx',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/Dvs1PRvMMR8',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ac: {
    imageUrl: 'thumbb82.png',
    title: 'Murder Mystery 2 SCRIPT',
    createdAt: '2026-04-17T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/eDJg1H0BO7Mq',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/EHdiRz8PRXU',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ad: {
    imageUrl: 'thumbb83.png',
    title: 'Kick A Lucky BLock SCRIPT',
    createdAt: '2026-04-18T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/8GjYzg0Ofwco',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/OjEPjUpomOc',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ae: {
    imageUrl: 'thumbb84.png',
    title: 'Seal a BRAINROT SCRIPT',
    createdAt: '2026-04-18T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/WpGxxHR2gnpm',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/fV2DBeZPw14',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  af: {
    imageUrl: 'thumbb85.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-04-19T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/wPWJPET1ikxW',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/d1jfO46h4RQ',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ag: {
    imageUrl: 'thumbb86.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-04-19T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/gXUH9xUCYWAi',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/1TRcmPNK6DI',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   ah: {
    imageUrl: 'thumbb87.png',
    title: 'JJS SCRIPT',
    createdAt: '2026-04-21T23:52:49.706Z',
    redirectUrl: 'https://link-center.net/330762/LOGQwJlRqPlL',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/x6rC2BTo0ys',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ai: {
    imageUrl: 'thumbb88.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-04-23T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/fm4ajsoknuOf',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/5NSFm8tFikY',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  aj: {
    imageUrl: 'thumbb89.png',
    title: 'Bizarre Lineage SCRIPT',
    createdAt: '2026-04-23T23:52:49.706Z',
    redirectUrl: 'https://link-target.net/330762/PEY1yEANauxF',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/7HnM0pytg4I',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
  ak: {
    imageUrl: 'thumbb90.png',
    title: 'Survive The Apocalypse SCRIPT',
    createdAt: '2026-04-26T23:52:49.706Z',
    redirectUrl: 'https://link-hub.net/330762/7pE6N6QdTQLT',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/_wtuDKo907Y',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   am: {
    imageUrl: 'thumbb91.png',
    title: 'Attack on Titan Revolution SCRIPT',
    createdAt: '2026-04-26T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/zcSafKSLRFi1',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/bJzf0eulyho',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
   an: {
    imageUrl: 'thumbb93.png',
    title: 'jjs SCRIPT',
    createdAt: '2026-04-29T23:52:49.706Z',
    redirectUrl: 'https://direct-link.net/330762/crs9PBowPw8M',
    actions: [
      {
        id: 1,
        type: 'like_comment',
        url: 'https://youtu.be/jH8NVQMhdus',
      },
      {
        id: 2,
        type: 'subscribe',
        url: 'https://www.youtube.com/@KAKAZiT',
      },
    ],
  },
};
