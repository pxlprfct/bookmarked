export interface Bookmark {
  href: string;
  name: string;
  // FIXME: NYI
  // add_date?: string;
  // icon?: string;
  // tags?: string[];
  // shortcut_url?: string;
}

export const isBookmark = (
  variableToCheck: unknown,
): variableToCheck is Bookmark =>
  (variableToCheck as Bookmark).href !== undefined;

export interface FolderProperties {
  ADD_DATE?: string;
  LAST_MODIFIED?: string;
}

export interface Folder {
  name: string;
  children: (Bookmark | Folder)[];
  add_date?: string;
  last_modified?: string;
  // TODO: something for when it's showing in toolbar?
  // CHROME: PERSONAL_TOOLBAR_FOLDER="true"
}

export const isFolder = (variableToCheck: unknown): variableToCheck is Folder =>
  (variableToCheck as Folder).children !== undefined;
