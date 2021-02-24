import { bookmarked } from './index';
import { BOOKMARKS } from './test/fixtures/bookmarks';
const { BLACK_GIRLS_CODE, FREE_CODE_CAMP, THE_NICEST_PLACE } = BOOKMARKS;
import {
  LEARN_PROGRAMMING_FOLDER,
  NESTED_FOLDERS,
  DOUBLE_NESTED_FOLDERS,
  DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER,
} from './test/fixtures/folders';

describe(`Generated bookmarks should conform to the 'NETSCAPE-Bookmark-file-1' standard`, () => {
  it('even without being passed any data - return an empty, but compliant structure', () => {
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

  it('passing a single bookmark', () => {
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
          <DT>
            <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
          </DT>
        </P>
      </DL>"
    `);
  });

  it('passing multiple bookmarks', () => {
    const result = bookmarked([BLACK_GIRLS_CODE, FREE_CODE_CAMP]);

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
          <DT>
            <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
          </DT>
          <DT>
            <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
          </DT>
        </P>
      </DL>"
    `);
  });

  it('passing a folder that contains multiple bookmarks', () => {
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
          <DL>
            <P>
              <DT>
                <H3>Learn Programming</H3>
              </DT>
              <DT>
                <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
              <DT>
                <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
              </DT>
            </P>
          </DL>
        </P>
      </DL>"
    `);
  });

  it('passing a folder that contains multiple bookmarks, and another single bookmark which is outside the folder', () => {
    const FOLDER_AND_BOOKMARK = [LEARN_PROGRAMMING_FOLDER, THE_NICEST_PLACE];

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
          <DL>
            <P>
              <DT>
                <H3>Learn Programming</H3>
              </DT>
              <DT>
                <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
              <DT>
                <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
              </DT>
            </P>
          </DL>
          <DT>
            <A href=\\"https://thenicestplace.net/\\">The Nicest Place on the Internet</A>
          </DT>
        </P>
      </DL>"
    `);
  });

  it('passing a folder of bookmarks that contains another folder of bookmarks', () => {
    const result = bookmarked(NESTED_FOLDERS);

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
          <DL>
            <P>
              <DT>
                <H3>Programming</H3>
              </DT>
              <DL>
                <P>
                  <DT>
                    <H3>Learn Programming</H3>
                  </DT>
                  <DT>
                    <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
              <DL>
                <P>
                  <DT>
                    <H3>JavaScript</H3>
                  </DT>
                  <DT>
                    <A href=\\"https://www.npmjs.com/\\">npm</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>
        </P>
      </DL>"
    `);
  });

  it('passing a folder of bookmarks that contains another folder of bookmarks, which contains another folder of bookmarks', () => {
    const result = bookmarked(DOUBLE_NESTED_FOLDERS);

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
          <DL>
            <P>
              <DT>
                <H3>Learn Programming</H3>
              </DT>
              <DT>
                <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
              <DT>
                <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
              </DT>
              <DL>
                <P>
                  <DT>
                    <H3>Coding Resources</H3>
                  </DT>
                  <DT>
                    <A href=\\"https://www.smashingmagazine.com/\\">smashingmagazine</A>
                  </DT>
                  <DT>
                    <A href=\\"https://developer.mozilla.org/en-US/\\">MDN Web Docs</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>
        </P>
      </DL>"
    `);
  });

  it('passing a folder of bookmarks that contains another folder of bookmarks, which contains another folder of bookmarks and a single folder', () => {
    const result = bookmarked(DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER);

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
          <DL>
            <P>
              <DT>
                <H3>Learn Programming</H3>
              </DT>
              <DT>
                <A href=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
              <DT>
                <A href=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
              </DT>
              <DL>
                <P>
                  <DT>
                    <H3>Coding Resources</H3>
                  </DT>
                  <DT>
                    <A href=\\"https://www.smashingmagazine.com/\\">smashingmagazine</A>
                  </DT>
                  <DT>
                    <A href=\\"https://developer.mozilla.org/en-US/\\">MDN Web Docs</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>
          <DL>
            <P>
              <DT>
                <H3>JavaScript</H3>
              </DT>
              <DT>
                <A href=\\"https://www.npmjs.com/\\">npm</A>
              </DT>
            </P>
          </DL>
        </P>
      </DL>"
    `);
  });
});
