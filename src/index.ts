import { addBookmark } from './formatters/bookmark';
import { addFolder } from './formatters/folder';
import { indentLeft, isBookmark, isFolder } from './utils';
import { HEADER, DEFAULT_AMOUNT_TO_PAD_BY } from './constants';
import { Bookmark, Folder } from './ts/types';

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
