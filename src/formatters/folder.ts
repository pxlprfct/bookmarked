import { Folder, FolderProperties } from '../ts/types';
import { hasProperties } from './../utils';
import { buildHtml } from '../buildHtml';
import { DEFAULT_AMOUNT_TO_PAD_BY } from '../constants';
import { formatProperties } from './properties';

const addProperties = (properties?: FolderProperties) =>
  hasProperties(properties)
    ? formatProperties(properties as FolderProperties)
    : '';

const buildFolder = (folder: Folder) =>
  `<H3` + `${addProperties(folder.properties)}` + `>${folder.name}</H3>`;

export const addFolder = (folder: Folder, pad: string): string =>
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
