import { Bookmark } from '../types';

export const createBookmark = (bookmark: Bookmark, pad: string): string =>
  [
    `${pad}<DT>`,
    `${pad}  <A HREF="${bookmark.href}">${bookmark.name}</A>`,
    `${pad}</DT>`,
  ].join('\n');
