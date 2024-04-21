#!/usr/bin/env bash
bin/makeLinkJson.js
bin/llmupdatedb.sh
sqlite-utils rows db/llmsearch.db -c id -c embedding -c content -o id --json-cols embeddings > db/embeddings.json
