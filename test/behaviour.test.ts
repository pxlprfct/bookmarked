import { describe, expect, it } from 'vitest';
import { bookmarked } from '../src/index';
import type { Bookmark, Folder } from '../src/index';

const body = (html: string) => html.split('\n').slice(8, -2).join('\n');

describe('escaping', () => {
  it('escapes names and hrefs', () => {
    const html = bookmarked([
      { href: 'https://a.test/?a=1&b="2"', name: '</A><script>x</script>' },
    ]);
    expect(body(html)).toContain(
      '<A HREF="https://a.test/?a=1&amp;b=&quot;2&quot;">&lt;/A&gt;&lt;script&gt;x&lt;/script&gt;</A>',
    );
  });

  it('escapes folder names and property values', () => {
    const html = bookmarked([
      { name: 'R&D', children: [], properties: { TAGS: 'a"b' } },
    ]);
    expect(html).toContain('<H3 TAGS="a&quot;b">R&amp;D</H3>');
  });

  it('rejects attribute names that could break out of the tag', () => {
    const bookmark = {
      href: 'https://a.test',
      name: 'a',
      properties: { 'x onload=alert(1)': 'y' },
    } satisfies Bookmark;
    expect(() => bookmarked([bookmark])).toThrow(TypeError);
  });
});

describe('properties', () => {
  it('renders true as a bare attribute and skips undefined', () => {
    const html = bookmarked([
      {
        name: 'f',
        children: [],
        properties: { FOLDED: true, ADD_DATE: undefined },
      },
    ]);
    expect(html).toContain('<H3 FOLDED>f</H3>');
  });

  it('renders nothing when every property is undefined', () => {
    const html = bookmarked([
      { name: 'f', children: [], properties: { ADD_DATE: undefined } },
    ]);
    expect(html).toContain('<H3>f</H3>');
  });
});

describe('invalid input', () => {
  it.each([
    ['null', null],
    ['a string', 'nope'],
    ['an object with neither href nor children', { name: 'x' }],
  ])('throws a TypeError for %s', (_, item) => {
    expect(() => bookmarked([item as unknown as Bookmark])).toThrow(TypeError);
  });

  it('reports the index of the offending item', () => {
    const ok: Bookmark = { href: 'https://a.test', name: 'a' };
    expect(() => bookmarked([ok, null as unknown as Folder])).toThrow(
      'index 1',
    );
  });
});

describe('options', () => {
  const tree: Folder[] = [
    {
      name: 'f',
      children: [{ href: 'https://a.test', name: 'a' }],
    },
  ];

  it('scales nesting by the indent option', () => {
    const lines = bookmarked(tree, { indent: 2 }).split('\n');
    expect(lines).toContain('  <DT>');
    expect(lines).toContain('    <DT>');
  });

  it('defaults to four spaces', () => {
    expect(bookmarked(tree)).toBe(bookmarked(tree, { indent: 4 }));
  });

  it.each([-1, 1.5, Number.NaN])('rejects indent %s', (indent) => {
    expect(() => bookmarked([], { indent })).toThrow(RangeError);
  });
});
