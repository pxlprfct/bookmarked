import { FolderProperties } from './../types';
import { hasProperties } from './../utils';
import { buildHtml } from '../index';
import { DEFAULT_AMOUNT_TO_PAD_BY } from '../constants';
import { addProperties } from './properties';
import { Folder } from '../types';

const buildProperties = (properties?: FolderProperties) =>
  hasProperties(properties)
    ? addProperties(properties as FolderProperties)
    : '';

const buildFolder = (folder: Folder) =>
  `<H3` + `${buildProperties(folder.properties)}` + `>${folder.name}</H3>`;

export const createFolder = (folder: Folder, pad: string): string =>
  [
    `${pad}<DL>`,
    `${pad}  <P>`,
    `${pad}    <DT>`,
    `${pad}      ${buildFolder(folder)}`,
    `${pad}    </DT>`,
    // recursively call the build function
    // don't add any 'external' padding - the 'padding to be applied' needs to be the indent argument
    // TODO: using strings and numbers to determine padding feels off - decide on one or the other!
    `${buildHtml(folder.children, pad.length + DEFAULT_AMOUNT_TO_PAD_BY)}`,
    `${pad}  </P>`,
    `${pad}</DL>`,
  ].join('\n');
