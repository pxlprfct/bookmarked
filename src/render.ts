import { escapeHtml } from './escape';
import type { Bookmark, Folder, FolderOrBookmarkProperties } from './types';

const ATTRIBUTE_NAME = /^[A-Za-z_][\w.:-]*$/;

const renderAttribute = ([key, value]: [string, string | true]): string => {
  if (!ATTRIBUTE_NAME.test(key)) {
    throw new TypeError(`Invalid attribute name: ${JSON.stringify(key)}`);
  }
  return value === true ? key : `${key}="${escapeHtml(value)}"`;
};

// returns '' or a string with a leading space, ready to append to a tag name
const renderProperties = (properties?: FolderOrBookmarkProperties): string => {
  const attributes = Object.entries(properties ?? {}).filter(
    (entry): entry is [string, string | true] => entry[1] !== undefined,
  );

  return attributes.length > 0
    ? ` ${attributes.map(renderAttribute).join(' ')}`
    : '';
};

const renderBookmark = (bookmark: Bookmark, pad: string): string =>
  [
    `${pad}<DT>`,
    `${pad}  <A HREF="${escapeHtml(bookmark.href)}"${renderProperties(bookmark.properties)}>${escapeHtml(bookmark.name)}</A>`,
    `${pad}</DT>`,
  ].join('\n');

const renderFolder = (
  folder: Folder,
  depth: number,
  indent: number,
): string => {
  const pad = ' '.repeat(indent * depth);

  return [
    `${pad}<DT>`,
    `${pad}  <H3${renderProperties(folder.properties)}>${escapeHtml(folder.name)}</H3>`,
    `${pad}</DT>`,
    `${pad}<DL>`,
    `${pad}  <P>`,
    renderNodes(folder.children, depth + 1, indent),
    `${pad}  </P>`,
    `${pad}</DL>`,
  ].join('\n');
};

export const renderNodes = (
  nodes: readonly (Bookmark | Folder)[],
  depth: number,
  indent: number,
): string =>
  nodes
    .map((node, index) => {
      if (typeof node !== 'object' || node === null) {
        throw new TypeError(
          `Expected a bookmark or folder at index ${index}, received ${node === null ? 'null' : typeof node}`,
        );
      }
      if (node.children !== undefined) {
        return renderFolder(node, depth, indent);
      }
      if (node.href !== undefined) {
        return renderBookmark(node, ' '.repeat(indent * depth));
      }
      throw new TypeError(
        `Expected a bookmark (with "href") or folder (with "children") at index ${index}`,
      );
    })
    .join('\n');
