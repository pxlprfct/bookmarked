export interface Bookmark {
  href: string;
  name: string;
  // FIXME: NYI
  // add_date?: string;
  // icon?: string;
  // tags?: string[];
  // shortcut_url?: string;
}

export interface Folder {
  name: string;
  children: (Bookmark | Folder)[];
  // allows adding any property, but also gives hints as to what are valid tags
  properties?: FolderProperties | Record;
}

interface Record {
  [key: string]: string;
}

export interface FolderProperties {
  ADD_DATE?: string;
  LAST_MODIFIED?: string;
  PERSONAL_TOOLBAR_FOLDER?: 'true' | 'false';
}
