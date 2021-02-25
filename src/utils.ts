import { FolderProperties } from './types';

export const indentLeft = (indent: number): string => ' '.repeat(indent);

const isEmpty = (object: Record<string, unknown> | FolderProperties): boolean =>
  Object.keys(object).length === 0;

const createPropertyString = ([key, value]: [string, unknown]): string =>
  `${key}="${value}"`;

const formatProperties = (properties: FolderProperties): string =>
  Object.entries(properties).map(createPropertyString).join(' ');

export const addProperties = (propertiesToAdd: FolderProperties): string =>
  isEmpty(propertiesToAdd) ? '' : ` ${formatProperties(propertiesToAdd)}`;
