import { renderNodes } from './render';
import type { Bookmark, Folder, Options } from './types';

const HEADER = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>`;

const DEFAULT_INDENT = 4;

export const bookmarked = (
  content: readonly (Bookmark | Folder)[] = [],
  { indent = DEFAULT_INDENT }: Options = {},
): string => {
  if (!Number.isInteger(indent) || indent < 0) {
    throw new RangeError(
      `indent must be a non-negative integer, received ${indent}`,
    );
  }

  return [
    HEADER,
    '<DL>',
    '  <P>',
    renderNodes(content, 1, indent),
    '  </P>',
    '</DL>',
  ].join('\n');
};

export type {
  Bookmark,
  Folder,
  FolderOrBookmarkProperties,
  FolderProperties,
  BookmarkProperties,
  Options,
} from './types';
