#/bin/bash
echo `pwd`
docker run --env-file=`pwd`/phantomjs-rb.env -v `pwd`/data:/data -v `pwd`/phantom-rb.js:/phantom-rb.js -d wernight/phantomjs  phantomjs /phantom-rb.js
