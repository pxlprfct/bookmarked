---
'bookmarked': major
---

Breaking: names, hrefs and property values are now HTML-escaped (`&`, `<`, `>`, `"`), so pre-escaped input will be double-escaped. Invalid attribute names and items that are neither a bookmark nor a folder now throw a `TypeError`. `Bookmark` and `Folder` types are mutually exclusive, `children` accepts readonly arrays, and `bookmarked(content, { indent })` accepts an optional `indent`. Requires Node 20+; build moved to tsdown (output files are now `.mjs`/`.cjs`).
