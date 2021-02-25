import { FolderProperties } from './types';

export const indentLeft = (indent: number): string => ' '.repeat(indent);

export const isEmpty = (
  object: Record<string, unknown> | FolderProperties,
): boolean => Object.keys(object).length === 0;
