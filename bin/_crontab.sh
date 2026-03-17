#!/usr/bin/env bash
# is added to the crontab to ensure timely publication of links so that the search mechanism works
cd $(dirname $0)/..
exec >> bin/_crontab.sh.log 2>&1
echo "========================="
date
bin/_makeAll.sh
git add 20*
# if there are no changes, don't commit
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to commit"
  exit 0
fi

COMMIT_MSG=""
# if command chatgpt is available, use it to generate a better commit message
if command -v chatgpt &> /dev/null; then
  COMMIT_MSG="Automatic: $(git diff --cached | chatgpt -f - -uf assets/commit.prompt)"
fi
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="Cron job - background add of links"
fi

git commit -m "$COMMIT_MSG"
git push
