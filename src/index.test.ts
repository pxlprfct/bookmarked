import { bookmarked } from './index';
import BOOKMARKS from './test/fixtures/bookmarks/index';
import FOLDERS from './test/fixtures/folders/index';

const {
  BLACK_GIRLS_CODE,
  FREE_CODE_CAMP,
  THE_NICEST_PLACE,
  BOOKMARK_WITH_DATE_ADDED,
  BOOKMARK_WITH_MULTIPLE_PROPERTIES,
  BOOKMARK_WITH_EMPTY_PROPERTIES,
  BOOKMARK_WITHOUT_PROPERTIES,
  BOOKMARK_WITH_CUSTOM_PROPERTIES,
} = BOOKMARKS;

const {
  LEARN_PROGRAMMING_FOLDER,
  NESTED_FOLDERS,
  DOUBLE_NESTED_FOLDERS,
  DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER,
  FOLDER_WITH_DATE_ADDED,
  FOLDER_WITH_MULTIPLE_PROPERTIES,
  FOLDER_WITH_EMPTY_PROPERTIES,
  FOLDER_WITHOUT_PROPERTIES,
  FOLDER_WITH_CUSTOM_PROPERTIES,
} = FOLDERS;

describe(`The generated file structure should conform to the 'NETSCAPE-Bookmark-file-1' standard`, () => {
  it('even without being passed any data - return an empty, but compliant structure', () => {
    expect(bookmarked()).toMatchInlineSnapshot(`
      "<!DOCTYPE NETSCAPE-Bookmark-file-1>
      <!-- This is an automatically generated file.
           It will be read and overwritten.
           DO NOT EDIT! -->
      <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
        <TITLE>Bookmarks</TITLE>
        <H1>Bookmarks</H1>
        <DL>
          <P>
            <DT>
              <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
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
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
        <TITLE>Bookmarks</TITLE>
        <H1>Bookmarks</H1>
        <DL>
          <P>
            <DT>
              <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
            </DT>
            <DT>
              <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
            </DT>
          </P>
        </DL>"
      `);
    });

    describe('Generating bookmarks with properties', () => {
      it('should generate a bookmark with the date it was added', () => {
        expect(bookmarked([BOOKMARK_WITH_DATE_ADDED])).toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DT>
                <A HREF="https://www.blackgirlscode.com/" ADD_DATE="1612002291">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
            </P>
          </DL>"
        `);
      });

      it('should generate a bookmark with multiple properties', () => {
        expect(bookmarked([BOOKMARK_WITH_MULTIPLE_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DT>
                <A HREF="https://www.blackgirlscode.com/" ADD_DATE="1612002291" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB20lEQVQ4jX2STWsTURSG33PuzORjTPNRPwk0mBbduBC0rQ0utIKKi0LVkoVCFfwxoqj/QuwfcBF0VWLqqgh1kXSSUrWQhdRSUsnMnXuvi0nDRKJnde7hvdz3PO8lHBcRMXPUa62HQyLSWhtjMLYINJSOFQgAzGyMuXHr9utXL0647uLizU5724Acx7k6O19defB1ayuQMrpgASBiQGeyueXl+45lHfX7d+7ec1MJsPiyufn4ydO5K5erj1aZhdZKACCCMaZYLIbS/9Ro9Pt+EPjbrabntT3P63a7e3s/Pm9sBFL+y+f/SsRXnJ1fqK48dBynVJra3f02c+Hi9cpCs9USQgwpxZ4Q9odabafdOnn6rJJ+qDQzsRDZieybl8/f1z4KIZRSA/DMBCXX1+vT5XKjXmeyM+nU2ts1GahCvpCw7Rj3eMfEtqWkFJYFbRRpAdbhSGoivlCFSkoFBXLPhSmtzTVd9HU4ifR55HvwA2iKchBgBf0Mc0u6vIPDS+YUCB1zMI3JQ/zOIU0Il/BuYD5mic7AbeJnEnbfSBc2w/QQhNA9yDySkWYkiAqmvuMXQUzA7uJoBoU29jNI5JDsYP8A/oiaRiH8dRxDCQCDDEz0YQ3AgD5WGAxI/QE3YLsLjXdTWwAAAABJRU5ErkJggg==">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
            </P>
          </DL>"
        `);
      });

      it(`should generate a bookmark (even if it wasn't given any properties)`, () => {
        expect(bookmarked([BOOKMARK_WITHOUT_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DT>
                <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
            </P>
          </DL>"
        `);
      });

      it('should generate a bookmark (even with an empty properties object)', () => {
        expect(bookmarked([BOOKMARK_WITH_EMPTY_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DT>
                <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
            </P>
          </DL>"
        `);
      });

      it('should generate a bookmark with custom properties', () => {
        expect(bookmarked([BOOKMARK_WITH_CUSTOM_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DT>
                <A HREF="https://www.blackgirlscode.com/" foo="bar">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
              </DT>
            </P>
          </DL>"
        `);
      });
    });
  });

  describe('Generating folders of bookmarks', () => {
    it('should generate a folder that contains multiple bookmarks', () => {
      expect(bookmarked([LEARN_PROGRAMMING_FOLDER])).toMatchInlineSnapshot(`
        "<!DOCTYPE NETSCAPE-Bookmark-file-1>
        <!-- This is an automatically generated file.
             It will be read and overwritten.
             DO NOT EDIT! -->
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                  <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });

    it('should generate a folder that contains multiple bookmarks, and another single bookmark on the same level', () => {
      const FOLDER_AND_BOOKMARK = [LEARN_PROGRAMMING_FOLDER, THE_NICEST_PLACE];

      expect(bookmarked(FOLDER_AND_BOOKMARK)).toMatchInlineSnapshot(`
        "<!DOCTYPE NETSCAPE-Bookmark-file-1>
        <!-- This is an automatically generated file.
             It will be read and overwritten.
             DO NOT EDIT! -->
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                  <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
              </P>
            </DL>
            <DT>
              <A HREF="https://thenicestplace.net/">The Nicest Place on the Internet</A>
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
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                      <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                    </DT>
                    <DT>
                      <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                    </DT>
                  </P>
                </DL>
                <DL>
                  <P>
                    <DT>
                      <H3>JavaScript</H3>
                    </DT>
                    <DT>
                      <A HREF="https://www.npmjs.com/">npm</A>
                    </DT>
                  </P>
                </DL>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });

    describe('Generating folders with properties', () => {
      it('should generate a folder with the date it was added', () => {
        expect(bookmarked([FOLDER_WITH_DATE_ADDED])).toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DL>
                <P>
                  <DT>
                    <H3 ADD_DATE="1609459200000">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it('should generate a folder with multiple properties', () => {
        expect(bookmarked([FOLDER_WITH_MULTIPLE_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DL>
                <P>
                  <DT>
                    <H3 ADD_DATE="1609459200000" LAST_MODIFIED="1609459200000">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder (even if it wasn't given any properties object)`, () => {
        expect(bookmarked([FOLDER_WITHOUT_PROPERTIES])).toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder (even with an empty properties object)`, () => {
        expect(bookmarked([FOLDER_WITH_EMPTY_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });

      it(`should generate a folder with custom properties`, () => {
        expect(bookmarked([FOLDER_WITH_CUSTOM_PROPERTIES]))
          .toMatchInlineSnapshot(`
          "<!DOCTYPE NETSCAPE-Bookmark-file-1>
          <!-- This is an automatically generated file.
               It will be read and overwritten.
               DO NOT EDIT! -->
          <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
          <TITLE>Bookmarks</TITLE>
          <H1>Bookmarks</H1>
          <DL>
            <P>
              <DL>
                <P>
                  <DT>
                    <H3 FOO="BAR">Learn Programming</H3>
                  </DT>
                  <DT>
                    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                  </DT>
                  <DT>
                    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                  </DT>
                </P>
              </DL>
            </P>
          </DL>"
        `);
      });
    });
  });

  describe('Complex scenarios', () => {
    it('should generate a folder of bookmarks that contains another folder of bookmarks, which also contains another folder of bookmarks', () => {
      expect(bookmarked(DOUBLE_NESTED_FOLDERS)).toMatchInlineSnapshot(`
        "<!DOCTYPE NETSCAPE-Bookmark-file-1>
        <!-- This is an automatically generated file.
             It will be read and overwritten.
             DO NOT EDIT! -->
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                  <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
                <DL>
                  <P>
                    <DT>
                      <H3>Coding Resources</H3>
                    </DT>
                    <DT>
                      <A HREF="https://www.smashingmagazine.com/">smashingmagazine</A>
                    </DT>
                    <DT>
                      <A HREF="https://developer.mozilla.org/en-US/">MDN Web Docs</A>
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
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
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
                  <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
                </DT>
                <DT>
                  <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
                </DT>
                <DL>
                  <P>
                    <DT>
                      <H3>Coding Resources</H3>
                    </DT>
                    <DT>
                      <A HREF="https://www.smashingmagazine.com/">smashingmagazine</A>
                    </DT>
                    <DT>
                      <A HREF="https://developer.mozilla.org/en-US/">MDN Web Docs</A>
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
                  <A HREF="https://www.npmjs.com/">npm</A>
                </DT>
              </P>
            </DL>
          </P>
        </DL>"
      `);
    });
  });
});
