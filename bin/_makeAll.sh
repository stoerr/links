#!/usr/bin/env bash
set -e
bin/makeLinkJson.js
jq -r '.[] | .category? // empty | .[]' db/links.json | sort | uniq -c | sort -nr | sed -E 's/^[[:space:]]*[0-9]+[[:space:]]+//' > db/categories.txt
bin/llmupdatedb.sh
sqlite-utils rows db/llmsearch.db -c id -c embedding -c content -o id --json-cols embeddings > db/embeddings.json.new
# exit if command failed
if [ $? -ne 0 ]; then
  echo "sqlite-utils command failed"
  exit 1
fi
# if new file is not empty, move it to the final location
if [ -s db/embeddings.json.new ]; then
  mv db/embeddings.json.new db/embeddings.json
else
  echo "New embeddings.json is empty, not replacing existing file"
  rm db/embeddings.json.new
fi

