#!/usr/bin/env bash
# summarize url given as argument using chatgpt
# usage: urlsummarize.sh https://example.com

if [ "$#" -ne 1 ]; then
  echo "Usage: urlsummarize.sh https://example.com"
  exit 1
fi

curl -s -L "$1" | pandoc --from html --to markdown --markdown-headings=atx --wrap=preserve -s |
  sed '/^:::/d' | chatgpt - -p "Content of URL $1:" -sf assets/linktmpl.prompt
