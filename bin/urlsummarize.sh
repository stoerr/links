#!/usr/bin/env bash
# summarize url given as argument using chatgpt
# usage: urlsummarize.sh https://example.com

# set -vx

if [ "$#" -ne 1 ]; then
  echo "Usage: urlsummarize.sh https://example.com"
  exit 1
fi

MODEL="gpt-3.5-turbo-0125"

# TODO: perhaps lynx -dump -nolist -width=1024 to wait for Javascript updates
# problem: doesn't wait long enough sometimes, and unclear how to extract head.
# -cmd-script print to local file?

(echo '---'; curl -s -L "$1" | pup 'head title,head meta[property=og:title],head meta[name=og:title],head meta[name=description],head meta[property=og:description],head meta[property=og:type]' ; echo '---'; echo; curl -s -L "$1" | html2text 2>/dev/null) |
  chatgpt - -m $MODEL -p "Content of URL $1:" -sf assets/linktmpl.prompt
