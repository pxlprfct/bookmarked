interface Record {
  [key: string]: string | undefined;
}

export interface Bookmark {
  href: string;
  name: string;
  // allows for adding any property, but also gives hints as to what are known valid properties
  properties?: BookmarkProperties;
}

export interface BookmarkProperties extends Record {
  ADD_DATE?: string;
  ICON?: string;
  SHORTCUT_URL?: string;
  TAGS?: string;
}

export interface Folder {
  name: string;
  children: (Bookmark | Folder)[];
  // allows for adding any property, but also gives hints as to what are known valid properties
  properties?: FolderProperties;
}

export interface FolderProperties extends Record {
  ADD_DATE?: string;
  LAST_MODIFIED?: string;
  PERSONAL_TOOLBAR_FOLDER?: 'true' | 'false';
}

export type FolderOrBookmarkProperties = FolderProperties | BookmarkProperties;
