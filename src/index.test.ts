import { bookmarked } from './index';

describe(`Generated bookmarks should conform to the 'NETSCAPE-Bookmark-file-1' standard`, () => {
  const BLACK_GIRLS_CODE = {
    href: 'https://www.blackgirlscode.com/',
    name: 'Black Girls Code, BlackGirlsCode, Women of Color in Technology',
  };

  const FREE_CODE_CAMP = {
    href: 'https://www.freecodecamp.org/',
    name: 'Learn to Code — For Free — Coding Courses for Busy People',
  };

  const LEARN_PROGRAMMING_BOOKMARKS = [BLACK_GIRLS_CODE, FREE_CODE_CAMP];

  const LEARN_PROGRAMMING_FOLDER = {
    name: 'Learn Programming',
    children: LEARN_PROGRAMMING_BOOKMARKS,
  };

  const THE_NICEST_PLACE = {
    href: 'https://thenicestplace.net/',
    name: 'The Nicest Place on the Internet',
  };

  const NPM = {
    href: 'https://www.npmjs.com/',
    name: 'npm',
  };

  const JAVASCRIPT_FOLDER = {
    name: 'JavaScript',
    children: [NPM],
  };

  const PROGRAMMING_FOLDER = {
    name: 'Programming',
    children: [LEARN_PROGRAMMING_FOLDER, JAVASCRIPT_FOLDER],
  };

  const FOLDER_AND_BOOKMARK = [LEARN_PROGRAMMING_FOLDER, THE_NICEST_PLACE];

  const NESTED_FOLDER = [PROGRAMMING_FOLDER];

  it('even without being passed any data - return an empty compliant structure', () => {
    const result = bookmarked();

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>

        </P>
      </DL>"
    `);
  });

  it('when passed a single bookmark, build it!', () => {
    const result = bookmarked([BLACK_GIRLS_CODE]);

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>
          <DT><A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A></DT>
        </P>
      </DL>"
    `);
  });

  it('when passed multiple bookmarks, build them!', () => {
    const result = bookmarked(LEARN_PROGRAMMING_BOOKMARKS);

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>
          <DT><A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A></DT>
          <DT><A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A></DT>
        </P>
      </DL>"
    `);
  });

  it('when passed a folder of bookmarks, build them!', () => {
    const result = bookmarked([LEARN_PROGRAMMING_FOLDER]);

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>
      <DL><P>
        <DT><H3>Learn Programming</H3></DT>
          <DT><A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A></DT>
          <DT><A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A></DT>
      </DL></P>
        </P>
      </DL>"
    `);
  });

  it('when passed a folder of bookmarks and a single bookmark build them!', () => {
    const result = bookmarked(FOLDER_AND_BOOKMARK);

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>
      <DL><P>
        <DT><H3>Learn Programming</H3></DT>
          <DT><A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A></DT>
          <DT><A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A></DT>
      </DL></P>
          <DT><A HREF=\\"https://thenicestplace.net/\\">The Nicest Place on the Internet</A></DT>
        </P>
      </DL>"
    `);
  });

  it('when passed a nested folder of bookmarks, build them!', () => {
    const result = bookmarked(NESTED_FOLDER);

    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV=\\"Content-Type\\" CONTENT=\\"text/html; charset=UTF-8\\">
      <TITLE>Bookmarks</TITLE>
      <H1>Bookmarks</H1>
      <DL>
        <P>
      <DL><P>
        <DT><H3>Programming</H3></DT>
      <DL><P>
        <DT><H3>Learn Programming</H3></DT>
          <DT><A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A></DT>
          <DT><A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A></DT>
      </DL></P>
      <DL><P>
        <DT><H3>JavaScript</H3></DT>
          <DT><A HREF=\\"https://www.npmjs.com/\\">npm</A></DT>
      </DL></P>
      </DL></P>
        </P>
      </DL>"
    `);
  });
});
