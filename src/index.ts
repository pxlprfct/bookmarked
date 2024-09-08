import buildHtml from './formatters/html';
import { HEADER, DEFAULT_AMOUNT_TO_PAD_BY } from './constants';
import type { Bookmark, Folder } from './ts/types';

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

export type {
  Bookmark,
  Folder,
  FolderOrBookmarkProperties,
  FolderProperties,
  BookmarkProperties,
} from './ts/types';
