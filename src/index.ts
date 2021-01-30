import { WRAPPER, SPACER, DOUBLE_SPACER } from './constants';
import { Bookmark, isBookmark, Folder, isFolder } from './ts/types';
import { DT, H3, A } from './tags';

const build = (content: Bookmark[] | Folder[] | unknown[]) =>
  // https://github.com/microsoft/TypeScript/issues/36390
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (content as any[])
    .reduce((acc, current) => {
      if (isFolder(current)) {
        acc.push(buildFolder(current));
      }

      if (isBookmark(current)) {
        acc.push(formatBookmark(current));
      }

      return acc;
    }, [])
    .join('\n');

const buildFolder = (current: Folder): string => {
  return [
    '<DL><P>',
    formatFolder(current),
    build(current.children),
    '</DL></P>',
  ].join('\n');
};

const formatFolder = (folder: Folder): string =>
  `${SPACER}${DT(H3(folder.name))}`;

const formatBookmark = (bookmark: Bookmark): string =>
  `${DOUBLE_SPACER}${DT(A(bookmark.name, bookmark.href))}`;

export const bookmarked = (content?: unknown[]): string =>
  WRAPPER(content ? build(content) : '');
