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
