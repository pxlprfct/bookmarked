export type Bookmark = {
  href: string;
  name: string;
  // FIXME: NYI
  // add_date?: string;
  // icon?: string;
  // tags?: string[];
  // shortcut_url?: string;
};

export const isBookmark = (
  variableToCheck: unknown,
): variableToCheck is Bookmark =>
  (variableToCheck as Bookmark).href !== undefined;

export type Folder = {
  name: string;
  children: (Bookmark | Folder)[];
  // FIXME: NYI
  // add_date?: string;
  // last_modified?: string;
  // TODO: something for showing in toolbar?
};

export const isFolder = (variableToCheck: unknown): variableToCheck is Folder =>
  (variableToCheck as Folder).children !== undefined;
