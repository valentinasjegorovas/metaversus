export interface Header {
  search: string;
  text: string;
  menu: string;
}

export const header: Header[] = [
  {
    search: '/search.png',
    text: 'metaversus',
    menu: '/menu-right.png',
  },
];

export interface Explore {
  id: string;
  imgUrl: string;
  title: string;
}

export const explore: Explore[] = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

export interface GetStartedSteps {
  text: string;
}

export const steps: GetStartedSteps[] = [
  {
    text: 'Find a world that suits you and you want to enter',
  },
  {
    text: 'Enter the world by reading basmalah to be safe',
  },
  {
    text: 'No need to beat around the bush, just stay on the gas and have fun',
  },
];

export interface WhatIsNew {
  imgUrl: string;
  title: string;
  text: string;
}

export const whatIsNew: WhatIsNew[] = [
  {
    imgUrl: '/img-icon.png',
    title: 'A new world',
    text: 'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/vr.png',
    title: 'More realistic',
    text: 'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export interface Insight {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const insight: Insight[] = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export interface Founder {
  title: string;
  subtitle: string;
  text: string;
}

export const founder: Founder[] = [
  {
    title: 'Samantha',
    subtitle: 'Founder Metaversus',
    text: "'With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything'",
  },
];

export interface Socials {
  icon: string;
}

export const socials: Socials[] = [
  {
    icon: 'twitter.svg',
  },
  {
    icon: 'linkedin.svg',
  },
  {
    icon: 'instagram.svg',
  },
  {
    icon: 'facebook.svg',
  },
];
