import { WRAPPER } from './constants';
import { Bookmark, isBookmark, Folder, isFolder } from './types';
import { DT, DL, P, H3, A } from './tags';

const build = (content: (Bookmark | Folder)[]) =>
  content
    .reduce((acc: string[], current) => {
      if (isFolder(current)) {
        acc.push(buildFolder(current));
      }

      if (isBookmark(current)) {
        acc.push(formatBookmark(current));
      }

      return acc;
    }, [])
    .join('\n');

const formatFolder = (folder: Folder): string => DT(H3(folder.name));

const buildFolder = (current: Folder): string =>
  DL(P(`${formatFolder(current)}${build(current.children)}`));

const formatBookmark = (bookmark: Bookmark): string =>
  DT(A(bookmark.href)(bookmark.name));

export const bookmarked = (content?: (Bookmark | Folder)[]): string =>
  WRAPPER(content ? build(content) : '');
