import type { Folder } from '../../../../ts/types';

export const SAFARI_READING_LIST: Folder = {
  name: 'Reading List',
  properties: {
    id: 'com.apple.ReadingList',
    FOLDED: true,
  },
  children: [
    {
      name: `Why's (Poignant) Guide to Ruby`,
      href: 'https://poignant.guide/book/chapter-1.html',
    },
  ],
};
