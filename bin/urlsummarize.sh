#!/usr/bin/env bash
# summarize url given as argument using chatgpt
# usage: urlsummarize.sh https://example.com

if [ "$#" -ne 1 ]; then
  echo "Usage: urlsummarize.sh https://example.com"
  exit 1
fi

MODEL="gpt-3.5-turbo-0125"
MODEL4="gpt-4-0125-preview"

# curl -s -L "$1" | pandoc --from html --to markdown --markdown-headings=atx --wrap=preserve -s |
#   sed '/^:::/d' | chatgpt - -m $MODEL -p "Content of URL $1:" -sf assets/linktmpl.prompt

MARKDOWN=$(curl -s -L "$1" | pandoc --from html --to markdown --markdown-headings=atx --wrap=preserve -s | sed '/^:::/d')

RES=$(cat <<EOF | chatgpt - -m $MODEL -p "Content of URL $1:" -sf assets/linktmpl.prompt
$MARKDOWN
EOF
)

# if the return status of the last command wasn't 0 try again with MODEL4 because likely a token count limit was reached
if [ $? -ne 0 ]; then
  RES=$(cat <<EOF | chatgpt - -m $MODEL4 -p "Content of URL $1:" -sf assets/linktmpl.prompt
$MARKDOWN
EOF
)
  # if return status still isn't 0, print error message and exit
  if [ $? -ne 0 ]; then
    echo "Error: failed to summarize $1"
    exit 1
  fi
fi

cat <<EOF
$RES
EOF
