import { Folder, Bookmark, FolderProperties } from './types';

export const indentLeft = (indent: number): string => ' '.repeat(indent);

export const isUndefined = (variable: unknown): boolean =>
  variable === undefined;

export const isObject = (variable: unknown): boolean =>
  isUndefined(variable) ? false : typeof variable === 'object';

export const isEmpty = (variable: unknown): boolean =>
  Object.keys(variable as Record<string, string>).length === 0;

export const hasProperties = (
  properties?: Record<string, unknown> | FolderProperties,
): boolean => isObject(properties) && !isEmpty(properties);

export const isFolder = (variableToCheck: unknown): variableToCheck is Folder =>
  (variableToCheck as Folder).children !== undefined;

export const isBookmark = (
  variableToCheck: unknown,
): variableToCheck is Bookmark =>
  (variableToCheck as Bookmark).href !== undefined;
