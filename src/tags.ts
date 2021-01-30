const buildTags = (tag: string) => (content: string): string =>
  `<${tag}>${content}</${tag}>`;

// FIXME: do this better!
const buildTagsWithProperties = (tag: string) => (properties: string) => (
  content: string,
) => `<${tag} ${properties}>${content}</${tag}>`;

export const DT = buildTags('DT');
export const H3 = buildTags('H3');
export const A = (href: string) =>
  buildTagsWithProperties('A')(`HREF="${href}"`);

// FIXME: NYI
export const DL = buildTags('DL');
export const P = buildTags('P');
