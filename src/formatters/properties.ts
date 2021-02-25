import { isEmpty } from '../utils';
import { FolderProperties } from '../types';

const buildString = ([key, value]: [string, unknown]): string =>
  `${key}="${value}"`;

const format = (properties: FolderProperties): string =>
  Object.entries(properties).map(buildString).join(' ');

export const addProperties = (properties: FolderProperties): string =>
  isEmpty(properties) ? '' : ` ${format(properties)}`;
