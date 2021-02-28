import { addBookmark } from './bookmark';
import { addFolder } from './folder';
import { indentLeft, isBookmark, isFolder } from '../utils';
import { Bookmark, Folder } from '../ts/types';

export const buildHtml = (
  content: (Bookmark | Folder)[],
  indent: number,
): string =>
  content
    .reduce((html: string[], current) => {
      if (isFolder(current)) {
        html.push(addFolder(current, indentLeft(indent)));
      }

      if (isBookmark(current)) {
        html.push(addBookmark(current, indentLeft(indent)));
      }

      return html;
    }, [])
    .join('\n');
