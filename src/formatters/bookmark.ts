import addProperties from './properties';
import { Bookmark } from '../ts/types';

const buildBookmark = (bookmark: Bookmark) =>
  // eslint-disable-next-line prettier/prettier, no-useless-concat
  `<A HREF="${bookmark.href}"` + `${addProperties(bookmark.properties)}` + `>${bookmark.name}</A>`;

const addBookmark = (bookmark: Bookmark, pad: string): string =>
  // eslint-disable-next-line prettier/prettier
  [
    `${pad}<DT>`,
    `${pad}  ${buildBookmark(bookmark)}`,
    `${pad}</DT>`,
  ].join('\n');

export default addBookmark;
