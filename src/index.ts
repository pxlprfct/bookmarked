import { HEADER } from './constants';
import { Bookmark, isBookmark, Folder, isFolder } from './types';

const padLeft = (indent: number) => ' '.repeat(indent);

const createFolder = (folder: Folder, indent: number) =>
  [
    `${padLeft(indent)}<DL>`,
    `${padLeft(indent)}${padLeft(2)}<P>`,
    `${padLeft(indent)}${padLeft(4)}<DT>`,
    `${padLeft(indent)}${padLeft(6)}<H3>${folder.name}</H3>`,
    `${padLeft(indent)}${padLeft(4)}</DT>`,
    `${build(folder.children, indent + 4)}`,
    `${padLeft(indent)}${padLeft(2)}</P>`,
    `${padLeft(indent)}</DL>`,
  ].join('\n');

const createBookmark = (bookmark: Bookmark, indent: number) =>
  [
    `<DT>`,
    `${padLeft(2)}<A href="${bookmark.href}">${bookmark.name}</A>`,
    `</DT>`,
  ]
    .reduce((acc: string[], line) => {
      acc.push(`${padLeft(indent)}${line}`);
      return acc;
    }, [])
    .join('\n');

const build = (content: (Bookmark | Folder)[], indent: number) =>
  content
    .reduce((acc: string[], current) => {
      if (isFolder(current)) {
        acc.push(createFolder(current, indent));
      }

      if (isBookmark(current)) {
        acc.push(createBookmark(current, indent));
      }

      return acc;
    }, [])
    .join('\n');

export const bookmarked = (content?: (Bookmark | Folder)[]): string =>
  [
    `${HEADER}`,
    `<DL>`,
    `${padLeft(2)}<P>`,
    `${content ? build(content, 4) : ''}`,
    `${padLeft(2)}</P>`,
    `</DL>`,
  ].join('\n');
