import { addProperties, indentLeft } from './utils';
import { HEADER } from './constants';
import {
  Bookmark,
  isBookmark,
  Folder,
  isFolder,
  FolderProperties,
} from './types';

// TODO: configurable with an options object
const AMOUNT_TO_PAD_BY = 4;

const buildFolder = (folder: Folder) => {
  const { add_date, last_modified } = folder;

  const properties: FolderProperties = {
    ...(add_date && { ADD_DATE: add_date }),
    ...(last_modified && { LAST_MODIFIED: last_modified }),
  };

  return `<H3` + `${addProperties(properties)}` + `>${folder.name}</H3>`;
};

const createFolder = (folder: Folder, pad: string) =>
  [
    `${pad}<DL>`,
    `${pad}  <P>`,
    `${pad}    <DT>`,
    `${pad}      ${buildFolder(folder)}`,
    `${pad}    </DT>`,
    // recursively call the build function
    `${buildHtml(folder.children, pad.length + AMOUNT_TO_PAD_BY)}`,
    `${pad}  </P>`,
    `${pad}</DL>`,
  ].join('\n');

const createBookmark = (bookmark: Bookmark, pad: string) =>
  [
    `${pad}<DT>`,
    `${pad}  <A HREF="${bookmark.href}">${bookmark.name}</A>`,
    `${pad}</DT>`,
  ].join('\n');

const buildHtml = (content: (Bookmark | Folder)[], indent: number) =>
  content
    .reduce((html: string[], current) => {
      if (isFolder(current)) {
        html.push(createFolder(current, indentLeft(indent)));
      }

      if (isBookmark(current)) {
        html.push(createBookmark(current, indentLeft(indent)));
      }

      return html;
    }, [])
    .join('\n');

export const bookmarked = (content?: (Bookmark | Folder)[]): string =>
  [
    `${HEADER}`,
    `<DL>`,
    `  <P>`,
    `${content ? buildHtml(content, AMOUNT_TO_PAD_BY) : ''}`,
    `  </P>`,
    `</DL>`,
  ].join('\n');
