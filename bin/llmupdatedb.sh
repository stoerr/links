#!/usr/bin/env bash
echo update database for llmsearch.sh
echo large language model based search
progfile=$0
if test -L "$progfile"; then
  progfile=$(readlink "$progfile")
fi
progdir=$(dirname "$progfile")/..
cd $progdir

STORE="--store"
# STORE=""
MODEL="minilm"

llm embed-multi links -d db/llmsearch.db -m minilm $STORE --files . '20*/**/*.md'
