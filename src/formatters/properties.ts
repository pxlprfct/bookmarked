import { hasProperties } from '../utils';
import { FolderProperties, BookmarkProperties } from '../ts/types';

const format = ([key, value]: [string, unknown]): string => `${key}="${value}"`;

const formatProperties = (properties: Record<string, unknown>): string =>
  // adding a space to the start  " <H3 foo.../>"
  ` ${Object.entries(properties).map(format).join(' ')}`;

const addProperties = (
  properties?: FolderProperties | BookmarkProperties,
): string =>
  hasProperties(properties)
    ? formatProperties(properties as FolderProperties | BookmarkProperties)
    : '';

export default addProperties;
