import { hasProperties } from '../utils.ts';
import type { FolderOrBookmarkProperties } from '../ts/types.ts';

const format = ([key, value]: [string, unknown]): string => `${key}="${value}"`;

const formatProperties = (properties: FolderOrBookmarkProperties): string =>
  // adding a space to the start  " <H3 foo.../>"
  ` ${Object.entries(properties).map(format).join(' ')}`;

const addProperties = (properties?: FolderOrBookmarkProperties): string =>
  hasProperties(properties) ? formatProperties(properties) : '';

export default addProperties;
