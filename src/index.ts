import { createBookmark } from './formatters/bookmark';
import { createFolder } from './formatters/folder';
import { indentLeft } from './utils';
import { HEADER, AMOUNT_TO_PAD_BY } from './constants';
import { Bookmark, isBookmark, Folder, isFolder } from './types';

export const buildHtml = (
  content: (Bookmark | Folder)[],
  indent: number,
): string =>
  content
    .reduce((html: string[], current) => {
      if (isFolder(current)) {
        html.push(createFolder(current, indentLeft(indent)));
      }

      if (isBookmark(current)) {
        html.push(createBookmark(current, indentLeft(indent)));
      }

      return html;
    }, [])
    .join('\n');

export const bookmarked = (content?: (Bookmark | Folder)[]): string =>
  [
    `${HEADER}`,
    `<DL>`,
    `  <P>`,
    `${content ? buildHtml(content, AMOUNT_TO_PAD_BY) : ''}`,
    `  </P>`,
    `</DL>`,
  ].join('\n');
