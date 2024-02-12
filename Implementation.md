**# Implementation

This project is meant to be my personal link database, where I can save any number of interesting links with
categorization and a little description. I also want to make it searchable via AI later. Similarily to 
https://til.stoerr.net/ it should get some kind of browsability.

## Basic idea

The links should just be saved into the file system, no actual database that'd need a server. We will put every link 
into it's individual file that defines URL, title, description and category. The path contains the date, e.g.
`2024/02-11/My-Link-Title.md`.

## Creating a link

We make a script bin/addLink that takes the URL as argument, creates a new file in the current date's directory, and
opens the file in the editor. The file will contain a template for the link, which the user can fill in.

## Presentation and search

Local search can be done using [llm](https://github.com/simonw/llm).

## Link files

The link files are markdown files with a frontmatter that contains the URL, title, category and date.
The rest of the file is the description and summary of the link. The files are saved in a directory structure
that is based on the date of the link: e.g. 2024/02-11/My-Link-Title.md.
Example link file:

```
---
filename: TheArtOfCoding
category: AI, Coding
url: https://foo.bar/baz
title: The Art of Coding
description: An exploration into coding
---

# The Art of Coding

https://foo.bar/baz

## Description

An exploration into coding

## Summary

The article describes much stuff about coding.
```

## JSON

We collect the links into a big JSON file `db/links.json` that contains an array of links:
```json
[
  {
    "filepath": "2024/02-27/TheArtOfCoding.md",
    "category": "AI, Coding",
    "url": "https://foo.bar/baz",
    "title": "The Art of Coding",
    "description": "An exploration into coding",
    "text": "(the full article without the frontmatter)"
  }
]
```

The script bin/makeLinkJson.js creates this file. The files should be sorted alphabetically by filename - this way
they are sorted by date and there is a deterministic order. It should use no additional libraries that aren't in 
nodejs anyway.

We put this into .git/hooks/pre-commit to make sure the file is always up to date.
```bash
#!/bin/sh
node bin/makeLinkJson.js
git add db/links.json
```
