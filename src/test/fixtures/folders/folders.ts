import { Folder } from '../../../ts/types';
import {
  BLACK_GIRLS_CODE,
  FREE_CODE_CAMP,
  NPM,
  SMASHING_MAGAZINE,
  MDN,
} from '../bookmarks/bookmarks';

export const LEARN_PROGRAMMING_FOLDER: Folder = {
  name: 'Learn Programming',
  children: [BLACK_GIRLS_CODE, FREE_CODE_CAMP],
};

export const JAVASCRIPT_FOLDER: Folder = {
  name: 'JavaScript',
  children: [NPM],
};

export const NESTED_FOLDERS = [
  {
    name: 'Programming',
    children: [LEARN_PROGRAMMING_FOLDER, JAVASCRIPT_FOLDER],
  },
];

export const CODING_RESOURCES_FOLDER: Folder = {
  name: 'Coding Resources',
  children: [SMASHING_MAGAZINE, MDN],
};

export const DOUBLE_NESTED_FOLDERS = [
  {
    name: 'Learn Programming',
    children: [BLACK_GIRLS_CODE, FREE_CODE_CAMP, CODING_RESOURCES_FOLDER],
  },
];

export const DOUBLE_NESTED_FOLDERS_AND_SINGLE_FOLDER = [
  {
    name: 'Learn Programming',
    children: [BLACK_GIRLS_CODE, FREE_CODE_CAMP, CODING_RESOURCES_FOLDER],
  },
  JAVASCRIPT_FOLDER,
];
