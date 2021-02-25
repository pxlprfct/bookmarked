import { buildHtml } from '../index';
import { AMOUNT_TO_PAD_BY } from '../constants';
import { addProperties } from './properties';
import { Folder, FolderProperties } from '../types';

const buildFolder = (folder: Folder) => {
  const { add_date, last_modified } = folder;

  const properties: FolderProperties = {
    ...(add_date && { ADD_DATE: add_date }),
    ...(last_modified && { LAST_MODIFIED: last_modified }),
  };

  return `<H3` + `${addProperties(properties)}` + `>${folder.name}</H3>`;
};

export const createFolder = (folder: Folder, pad: string): string =>
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
