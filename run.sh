#/bin/bash
docker run --env-file=`pwd`/phantomjs-rb.env -v `pwd`/data:/data -v `pwd`/phantom-rb.js:/phantom-rb.js -it wernight/phantomjs  phantomjs /phantom-rb.js
