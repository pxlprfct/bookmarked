/** Attributes rendered onto an element. `true` renders as a bare attribute. */
interface Attributes {
  [key: string]: string | true | undefined;
}

export interface BookmarkProperties extends Attributes {
  ADD_DATE?: string;
  ICON?: string;
  SHORTCUT_URL?: string;
  TAGS?: string;
}

export interface FolderProperties extends Attributes {
  ADD_DATE?: string;
  LAST_MODIFIED?: string;
  PERSONAL_TOOLBAR_FOLDER?: 'true' | 'false';
}

export type FolderOrBookmarkProperties = FolderProperties | BookmarkProperties;

export interface Bookmark {
  href: string;
  name: string;
  properties?: BookmarkProperties;
  children?: never;
}

export interface Folder {
  name: string;
  children: readonly (Bookmark | Folder)[];
  properties?: FolderProperties;
  href?: never;
}

export interface Options {
  /** Spaces added per nesting level. Defaults to `4`. */
  indent?: number;
}
