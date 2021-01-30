export const SPACER = '  ';

export const DOUBLE_SPACER = SPACER.repeat(2);

export const HEAD = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>`;

// TODO: replace with tags throughout
export const WRAPPER = (content: string): string => `${HEAD}
<DL>
${SPACER}<P>
${content}
${SPACER}</P>
</DL>`;
