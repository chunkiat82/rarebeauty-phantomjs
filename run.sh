#/bin/bash
docker run --env-file=`pwd`/phantomjs-rb.env -v /data/rarebeauty-reports:/data -v `pwd`/phantom-rb.js:/phantom-rb.js -d wernight/phantomjs  phantomjs /phantom-rb.js
