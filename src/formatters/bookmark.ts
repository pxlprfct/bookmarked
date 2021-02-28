import { formatProperties } from './properties';
import { hasProperties } from './../utils';
import { Bookmark, BookmarkProperties } from '../ts/types';

const addProperties = (properties?: BookmarkProperties) =>
  hasProperties(properties)
    ? formatProperties(properties as BookmarkProperties)
    : '';

const buildBookmark = (bookmark: Bookmark) =>
  // eslint-disable-next-line prettier/prettier
  `<A HREF="${bookmark.href}"` + `${addProperties(bookmark.properties)}` + `>${bookmark.name}</A>`;

export const addBookmark = (bookmark: Bookmark, pad: string): string =>
  // eslint-disable-next-line prettier/prettier
  [
    `${pad}<DT>`,
    `${pad}  ${buildBookmark(bookmark)}`,
    `${pad}</DT>`,
  ].join('\n');
