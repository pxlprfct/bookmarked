import { BOOKMARKS } from './bookmarks';

export const LEARN_PROGRAMMING_FOLDER = {
  name: 'Learn Programming',
  children: [BOOKMARKS.BLACK_GIRLS_CODE, BOOKMARKS.FREE_CODE_CAMP],
};

const JAVASCRIPT_FOLDER = {
  name: 'JavaScript',
  children: [BOOKMARKS.NPM],
};

export const NESTED_FOLDERS = [
  {
    name: 'Programming',
    children: [LEARN_PROGRAMMING_FOLDER, JAVASCRIPT_FOLDER],
  },
];

const CODING_RESOURCES_FOLDER = {
  name: 'Coding Resources',
  children: [BOOKMARKS.SMASHING_MAGAZINE, BOOKMARKS.MDN],
};

export const DOUBLE_NESTED_FOLDERS = [
  {
    name: 'Learn Programming',
    children: [
      BOOKMARKS.BLACK_GIRLS_CODE,
      BOOKMARKS.FREE_CODE_CAMP,
      CODING_RESOURCES_FOLDER,
    ],
  },
];

export const DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER = [
  {
    name: 'Learn Programming',
    children: [
      BOOKMARKS.BLACK_GIRLS_CODE,
      BOOKMARKS.FREE_CODE_CAMP,
      CODING_RESOURCES_FOLDER,
    ],
  },
  JAVASCRIPT_FOLDER,
];
