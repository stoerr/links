#!/usr/bin/env bash
# is added to the crontab to ensure timely publication of links so that the search mechanism works
cd $(dirname $0)/..
# exec >> _oncron.log
date
bin/_makeAll.sh
