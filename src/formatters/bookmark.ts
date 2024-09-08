import addProperties from './properties';
import type { Bookmark } from '../ts/types';

const buildBookmark = (bookmark: Bookmark) =>
  `<A HREF="${bookmark.href}"` +
  `${addProperties(bookmark.properties)}` +
  `>${bookmark.name}</A>`;

const addBookmark = (bookmark: Bookmark, pad: string): string =>
  [`${pad}<DT>`, `${pad}  ${buildBookmark(bookmark)}`, `${pad}</DT>`].join(
    '\n',
  );

export default addBookmark;
