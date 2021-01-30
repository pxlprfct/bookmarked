# Bookmarked
A tiny, dependency free library for building bookmark files.

## Install
```zsh
$ npm install bookmarked
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
<DL>
  <p>
    <DT><A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
    <DT><A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
  </p>
</DL>`);
```

### Bookmarks inside folders
```ts
import { bookmarked } from 'bookmarked';

const bookmarks = [
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
  {
    href: 'https://thenicestplace.net/',
    name: 'The Nicest Place on the Internet',
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
<DL>
  <p>
    <DT><H3 ADD_DATE="1611235283" LAST_MODIFIED="1611235283">Programming</H3>
    <DL><p>
      <DT><A HREF="https://www.blackgirlscode.com/">Black Girls Code, BlackGirlsCode, Women of Color in Technology</A>
      <DT><A HREF="https://www.freecodecamp.org/">Learn to Code — For Free — Coding Courses for Busy People</A>
    </p></DL>
    <DT><A HREF="https://thenicestplace.net/">The Nicest Place on the Internet</A>
  </p>
</DL>`);
```

Check out the test file for more example!
