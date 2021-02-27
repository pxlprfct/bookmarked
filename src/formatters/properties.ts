import { FolderProperties } from '../types';

const buildString = ([key, value]: [string, unknown]): string =>
  `${key}="${value}"`;

export const addProperties = (properties: FolderProperties): string =>
  // adding a space to the start  " <H3 foo.../>"
  ' ' + Object.entries(properties).map(buildString).join(' ');
