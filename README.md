# `bookmarked` 🔖
![Node.js CI](https://github.com/pxlprfct/bookmarked/workflows/Node.js%20CI/badge.svg)

A tiny (dependency free!) library for building bookmark files.

`bookmarked` supports ES Modules (ESM), CommonJS (CJS), and the Universal Module Definition (UMD) - so  it'll be usable wherever you need it.

## Install
```sh
$ npm i bookmarked
```

## Usage
### Single level deep bookmarks
```ts
import { bookmarked } from 'bookmarked';

const bookmarks = [
  {
    href: 'https://www.blackgirlscode.com/',
    name: 'Black Girls Code, BlackGirlsCode, Women of Color in Technology',
  },
  {
    href: 'https://www.freecodecamp.org/',
    name: 'Learn to Code — For Free — Coding Courses for Busy People',
  },
];

const html = bookmarked(bookmarks)
```

```html
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
      It will be read and overwritten.
      DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><P><DT>
  <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
</DT>
<DT>
  <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
</DT></P></DL>
```

### Bookmarks inside folders
```ts
[
  {
    name: 'Learn to code',
    children: [
      {
        href: 'https://www.blackgirlscode.com/',
        name: 'Black Girls Code, BlackGirlsCode, Women of Color in Technology',
      },
      {
        href: 'https://www.freecodecamp.org/',
        name: 'Learn to Code — For Free — Coding Courses for Busy People',
      },
    ],
  },
];
```

```html
...
<DL><P><DL>
  <P>
  <DT>
    <H3>Learn Programming</H3>
  </DT>
  <DT>
    <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
  </DT>
  <DT>
    <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
  </DT>
</P>
</DL></P></DL>
```

### Folders inside folders
```ts
[
  {
    name: 'Programming',
    children: [
      {
        name: 'Learn Programming',
        children: [
          {
            href: 'https://www.blackgirlscode.com/',
            name: 'Black Girls Code, BlackGirlsCode, Women of Color in Technology'
          },
          {
            href: 'https://www.freecodecamp.org/',
            name: 'Learn to Code — For Free — Coding Courses for Busy People'
          }
        ]
      },
      {
        name: 'JavaScript',
        children: [ { href: 'https://www.npmjs.com/', name: 'npm' } ]
      }
    ]
  }
]
```

```html
...
<DL><P><DL>
  <P>
  <DT>
    <H3>Programming</H3>
  </DT>
  <DL>
    <P>
    <DT>
      <H3>Learn Programming</H3>
    </DT>
    <DT>
      <A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
    </DT>
    <DT>
      <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
    </DT>
  </P>
</DL>
<DL>
  <P>
  <DT>
    <H3>JavaScript</H3>
  </DT>
  <DT>
    <A HREF="https://www.npmjs.com/">npm</A>
  </DT>
</P>
</DL>
</P>
</DL></P></DL>
```

Check out the test file for more example!
