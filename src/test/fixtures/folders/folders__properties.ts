import { LEARN_PROGRAMMING_FOLDER } from './folders';
import { Folder } from '../../../ts/types';

export const FOLDER_WITH_DATE_ADDED: Folder = {
  ...LEARN_PROGRAMMING_FOLDER,
  properties: {
    ADD_DATE: '1609459200000',
  },
};

export const FOLDER_WITH_MULTIPLE_PROPERTIES: Folder = {
  ...FOLDER_WITH_DATE_ADDED,
  properties: {
    ...FOLDER_WITH_DATE_ADDED.properties,
    LAST_MODIFIED: '1609459200000',
  },
};

export const FOLDER_WITHOUT_PROPERTIES: Folder = (() => {
  const BOOKMARK = LEARN_PROGRAMMING_FOLDER;
  delete BOOKMARK.properties;
  return BOOKMARK;
})();

export const FOLDER_WITH_EMPTY_PROPERTIES: Folder = {
  ...LEARN_PROGRAMMING_FOLDER,
  properties: {},
};

export const FOLDER_WITH_CUSTOM_PROPERTIES: Folder = {
  ...LEARN_PROGRAMMING_FOLDER,
  properties: {
    FOO: 'BAR',
  },
};
