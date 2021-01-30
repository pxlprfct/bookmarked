import { formatHTML } from './format';
import { DL, P } from './tags';

export const HEADER = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>`;

export const WRAPPER = (content: string): string =>
  `${HEADER}\n${DL(P(formatHTML(content)))}`;
