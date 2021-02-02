import { BOOKMARKS } from './bookmarks';

export const LEARN_PROGRAMMING_FOLDER = {
  name: 'Learn Programming',
  children: [BOOKMARKS.BLACK_GIRLS_CODE, BOOKMARKS.FREE_CODE_CAMP],
};

const JAVASCRIPT_FOLDER = {
  name: 'JavaScript',
  children: [BOOKMARKS.NPM],
};

const PROGRAMMING_FOLDER = {
  name: 'Programming',
  children: [LEARN_PROGRAMMING_FOLDER, JAVASCRIPT_FOLDER],
};

export const NESTED_FOLDER = [PROGRAMMING_FOLDER];
