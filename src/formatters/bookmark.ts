import addProperties from './properties.ts';
import type { Bookmark } from '../ts/types.ts';

const buildBookmark = (bookmark: Bookmark) =>
  `<A HREF="${bookmark.href}"` +
  `${addProperties(bookmark.properties)}` +
  `>${bookmark.name}</A>`;

const addBookmark = (bookmark: Bookmark, pad: string): string =>
  [`${pad}<DT>`, `${pad}  ${buildBookmark(bookmark)}`, `${pad}</DT>`].join(
    '\n',
  );

export default addBookmark;
