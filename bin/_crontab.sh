#!/usr/bin/env bash
# is added to the crontab to ensure timely publication of links so that the search mechanism works
cd $(dirname $0)/..
exec >> bin/_crontab.sh.log
date
bin/_makeAll.sh
git add -A
# if there are no changes, don't commit
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to commit"
  exit 0
fi
git commit -m "Cron job - background add of links"
git push
