# `bookmarked` 🔖

![GitHub](https://img.shields.io/github/license/pxlprfct/bookmarked)
![npm](https://img.shields.io/npm/v/bookmarked)

A tiny (dependency free!) library for building bookmark files.

`bookmarked` supports ES Modules (ESM) and CommonJS (CJS) - so it'll be wherever you need it.

## How to install

```sh
$ npm i bookmarked
```

## How to use

### Single level deep bookmarks

```ts
import { bookmarked } from "bookmarked";

const bookmarks = [
  {
    href: "https://codebar.io/",
    name: "Making tech more diverse and welcoming by bringing people together and helping teach programming skills",
  },
  {
    href: "https://www.freecodecamp.org/",
    name: "Learn to Code — For Free — Coding Courses for Busy People",
  },
];

const html = bookmarked(bookmarks);
```

```html
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
      It will be read and overwritten.
      DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL>
  <P>
    <DT>
      <A HREF="https://codebar.io/">Making tech more diverse and welcoming by bringing people together and helping teach programming skills.</A>
    </DT>
    <DT>
      <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
    </DT>
  </P>
</DL>
```

### Bookmarks inside folders

```ts
[
  {
    name: "Learn to code",
    children: [
      {
        href: "https://codebar.io/",
        name: "Making tech more diverse and welcoming by bringing people together and helping teach programming skills.",
      },
      {
        href: "https://www.freecodecamp.org/",
        name: "Learn to Code — For Free — Coding Courses for Busy People",
      },
    ],
  },
];
```

```html
...
<DL>
  <P>
    <DT>
      <H3>Learn Programming</H3>
    </DT>
    <DL>
      <P>
        <DT>
          <A HREF="https://codebar.io/">Making tech more diverse and welcoming by bringing people together and helping teach programming skills.</A>
        </DT>
        <DT>
          <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
        </DT>
      </P>
    </DL>
  </P>
</DL>
```

### Folders inside folders

```ts
[
  {
    name: "Programming",
    children: [
      {
        name: "Learn Programming",
        children: [
          {
            href: "https://codebar.io/",
            name:
              "Making tech more diverse and welcoming by bringing people together and helping teach programming skills.",
          },
          {
            href: "https://www.freecodecamp.org/",
            name: "Learn to Code — For Free — Coding Courses for Busy People",
          },
        ],
      },
      {
        name: "JavaScript",
        children: [
          {
            href: "https://www.npmjs.com/",
            name: "npm",
          },
        ],
      },
    ],
  },
];
```

```html
...
<DL>
  <P>
    <DT>
      <H3>Programming</H3>
    </DT>
    <DL>
      <P>
        <DT>
          <H3>Learn Programming</H3>
        </DT>
        <DL>
          <P>
            <DT>
              <A HREF="https://codebar.io/">Making tech more diverse and welcoming by bringing people together and helping teach programming skills.</A>
            </DT>
            <DT>
              <A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
            </DT>
          </P>
        </DL>
        <DT>
          <H3>JavaScript</H3>
        </DT>
        <DL>
          <P>
            <DT>
              <A HREF="https://www.npmjs.com/">npm</A>
            </DT>
          </P>
        </DL>
      </P>
    </DL>
  </P>
</DL>
```

Check out the [test file](https://github.com/pxlprfct/bookmarked/blob/main/src/index.test.ts) for more examples
