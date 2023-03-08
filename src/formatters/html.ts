import addBookmark from './bookmark';
import { indentLeft, isBookmark, isFolder } from '../utils';
import { Bookmark, Folder } from '../ts/types';
import { DEFAULT_AMOUNT_TO_PAD_BY } from '../constants';
import addProperties from './properties';

const buildFolder = (folder: Folder) =>
  // eslint-disable-next-line no-useless-concat
  `<H3` + `${addProperties(folder.properties)}` + `>${folder.name}</H3>`;

const addFolder = (folder: Folder, pad: string): string =>
  [
    `${pad}<DT>`,
    `${pad}  ${buildFolder(folder)}`,
    `${pad}</DT>`,
    `${pad}<DL>`,
    `${pad}  <P>`,
    // recursively call the build function
    // don't add any 'external' padding - the 'padding to be applied' needs to be the indent argument
    // TODO: using strings and numbers to determine padding feels off - decide on one or the other!
    `${buildHtml(folder.children, pad.length + DEFAULT_AMOUNT_TO_PAD_BY)}`,
    `${pad}  </P>`,
    `${pad}</DL>`,
  ].join('\n');

const buildHtml = (content: (Bookmark | Folder)[], indent: number): string =>
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

export default buildHtml;
