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
    "filepath": "2024/02-11/wizardzine.md",
    "category": [
      "productivity",
      "development"
    ],
    "url": "https",
    "text": "# Wizard Zines\n\nhttps://wizardzines.com/comics/ \n\nAn entertaining set of tipps for programmers - with a surprising amount of useful\nnice little stuff you might not have heard about even as a seasoned SoftwareEngineer ."
  },
  ...
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

Also a db/embeddings.json is created the same way that contains the OpenAI text-embedding-3-large embeddings of the
texts:

```json
  {
  "id": "2024/02-11/wizardzine.md",
  "embedding": {
    "$base64": true,
    "encoded": "3zxwu9e...sVjz929s7"
  },
  "content": "---\nfilename: wizardzine.md\ncategory: productivity, development\nurl: https://wizardzines.com/comics/\n---\n\n# Wizard Zines\n\nhttps://wizardzines.com/comics/ \n\nAn entertaining set of tipps for programmers - with a surprising amount of useful\nnice little stuff you might not have heard about even as a seasoned SoftwareEngineer .\n"
},
...
```

## Web interface

https://links.stoerr.net/ implements a search from the browser (index.md). That loads both db/links.json and
db/embeddings.json into the browser. Since both files are large, the fetched data has to be stored in a local variable. 
On search, it uses the OpenAI embeddings API to get the embeddings of the search
and compares them to all embeddings in db/embeddings.json with cosine similarity - note that the data is encoded in 
base64. The top 10 results are shown.
The OpenAI API key is stored in the local storage of the browser with key `openai_api_key`, or asked from the user 
with `prompt` if not found.

Example request for OpenAI embeddings API:

```bash
curl https://api.openai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "Your text string goes here",
    "model": "text-embedding-3-large",
    "encoding_format": "base64"
  }' > embed.txt
```

gives

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": "KnupO...G7yr1i28"
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}
```

Result display:

    ## [Some external link](2024/02-12/TheArtOfCodingACruelOptimism.md) [↗](https://medium.com/electronic-life/the-art-of-coding-a-cruel-optimism-59fc52571e91)
    [#Category1](), [#Category2](),[#Category3]()
    <details>
    <summary>One sentence description bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </summary>
    <p>
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla  
    </p>
    <p>
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla  
    </p>
    </details>
