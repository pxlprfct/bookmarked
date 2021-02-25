import { createBookmark } from './formatters/bookmark';
import { createFolder } from './formatters/folder';
import { indentLeft, isBookmark, isFolder } from './utils';
import { HEADER, DEFAULT_AMOUNT_TO_PAD_BY } from './constants';
import { Bookmark, Folder } from './types';

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
    // don't add any 'external' padding - the 'padding to be applied' needs to be the indent argument
    `${content ? buildHtml(content, DEFAULT_AMOUNT_TO_PAD_BY) : ''}`,
    `  </P>`,
    `</DL>`,
  ].join('\n');
