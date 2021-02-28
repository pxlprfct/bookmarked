import { Folder } from './types';
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
    expect(bookmarked()).toMatchInlineSnapshot(`
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

  describe('Generating bookmarks', () => {
    it('should generate a single bookmark', () => {
      expect(bookmarked([BLACK_GIRLS_CODE])).toMatchInlineSnapshot(`
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
              <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
            </DT>
          </P>
        </DL>"
      `);
    });

    it('should generate multiple bookmarks', () => {
      expect(bookmarked([BLACK_GIRLS_CODE, FREE_CODE_CAMP]))
        .toMatchInlineSnapshot(`
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
              <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
            </DT>
            <DT>
              <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
            </DT>
          </P>
        </DL>"
      `);
    });
  });

  describe('Generating folders of bookmarks', () => {
    it('should generate a folder that contains multiple bookmarks', () => {
      expect(bookmarked([LEARN_PROGRAMMING_FOLDER])).toMatchInlineSnapshot(`
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
                  <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });

    describe('Generating folders with properties', () => {
      it('should generate a folder with the date it was added', () => {
        const LEARN_PROGRAMMING_FOLDER_ADD_DATE: Folder = {
          ...LEARN_PROGRAMMING_FOLDER,
          properties: {
            ADD_DATE: '1609459200000',
          },
        };

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_ADD_DATE]))
          .toMatchInlineSnapshot(`
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
                    <H3 ADD_DATE=\\"1609459200000\\">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it('should generate a folder with the date it was last modified', () => {
        const LEARN_PROGRAMMING_FOLDER_LAST_MODIFIED: Folder = {
          ...LEARN_PROGRAMMING_FOLDER,
          properties: {
            LAST_MODIFIED: '1609459200000',
          },
        };

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_LAST_MODIFIED]))
          .toMatchInlineSnapshot(`
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
                    <H3 LAST_MODIFIED=\\"1609459200000\\">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it('should generate a folder with the date it was added, and when it was last modified', () => {
        const LEARN_PROGRAMMING_FOLDER_ADD_DATE: Folder = {
          ...LEARN_PROGRAMMING_FOLDER,
          properties: {
            ADD_DATE: '1609459200000',
            LAST_MODIFIED: '1609459200000',
          },
        };

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_ADD_DATE]))
          .toMatchInlineSnapshot(`
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
                    <H3 ADD_DATE=\\"1609459200000\\" LAST_MODIFIED=\\"1609459200000\\">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder, even without a properties object`, () => {
        const LEARN_PROGRAMMING_FOLDER_NO_PROPERTIES: Folder = LEARN_PROGRAMMING_FOLDER;
        delete LEARN_PROGRAMMING_FOLDER.properties;

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_NO_PROPERTIES]))
          .toMatchInlineSnapshot(`
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
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder, even with an empty properties object`, () => {
        const LEARN_PROGRAMMING_FOLDER_EMPTY_PROPERTIES: Folder = {
          ...LEARN_PROGRAMMING_FOLDER,
          properties: {},
        };

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_EMPTY_PROPERTIES]))
          .toMatchInlineSnapshot(`
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
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder with the whatever properties it's been passed`, () => {
        const LEARN_PROGRAMMING_FOLDER_LAST_MODIFIED: Folder = {
          ...LEARN_PROGRAMMING_FOLDER,
          properties: {
            FOO: 'BAR',
          },
        };

        expect(bookmarked([LEARN_PROGRAMMING_FOLDER_LAST_MODIFIED]))
          .toMatchInlineSnapshot(`
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
                    <H3 FOO=\\"BAR\\">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });
    });

    it('should generate a folder that contains multiple bookmarks, and another single bookmark on the same level as the folder', () => {
      const FOLDER_AND_BOOKMARK = [LEARN_PROGRAMMING_FOLDER, THE_NICEST_PLACE];

      expect(bookmarked(FOLDER_AND_BOOKMARK)).toMatchInlineSnapshot(`
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
                  <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
              </P>
            </DL>
            <DT>
              <A HREF=\\"https://thenicestplace.net/\\">The Nicest Place on the Internet</A>
            </DT>
          </P>
        </DL>"
      `);
    });

    it('should generate a folder of bookmarks that contains another folder of bookmarks', () => {
      expect(bookmarked(NESTED_FOLDERS)).toMatchInlineSnapshot(`
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
                      <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                    </DT>
                    <DT>
                      <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                    </DT>
                  </P>
                </DL>
                <DL>
                  <P>
                    <DT>
                      <H3>JavaScript</H3>
                    </DT>
                    <DT>
                      <A HREF=\\"https://www.npmjs.com/\\">npm</A>
                    </DT>
                  </P>
                </DL>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });
  });

  describe('Complex scenarios', () => {
    it('should generate a folder of bookmarks that contains another folder of bookmarks, which also contains another folder of bookmarks', () => {
      expect(bookmarked(DOUBLE_NESTED_FOLDERS)).toMatchInlineSnapshot(`
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
                  <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
                <DL>
                  <P>
                    <DT>
                      <H3>Coding Resources</H3>
                    </DT>
                    <DT>
                      <A HREF=\\"https://www.smashingmagazine.com/\\">smashingmagazine</A>
                    </DT>
                    <DT>
                      <A HREF=\\"https://developer.mozilla.org/en-US/\\">MDN Web Docs</A>
                    </DT>
                  </P>
                </DL>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });

    it('should generate a folder of bookmarks that contains another folder of bookmarks, which contains yet another folder of bookmarks and then single folder', () => {
      expect(bookmarked(DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER))
        .toMatchInlineSnapshot(`
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
                  <A HREF=\\"https://www.blackgirlscode.com/\\">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF=\\"https://www.freecodecamp.org/\\">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
                <DL>
                  <P>
                    <DT>
                      <H3>Coding Resources</H3>
                    </DT>
                    <DT>
                      <A HREF=\\"https://www.smashingmagazine.com/\\">smashingmagazine</A>
                    </DT>
                    <DT>
                      <A HREF=\\"https://developer.mozilla.org/en-US/\\">MDN Web Docs</A>
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
                  <A HREF=\\"https://www.npmjs.com/\\">npm</A>
                </DT>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });
  });
});
