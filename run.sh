#/bin/bash
echo `pwd`
echo '/data/jenkins/workspace/rarebeauty-daily-kibana'
docker run --env-file=/data/jenkins/workspace/rarebeauty-daily-kibana/phantomjs-rb.env -v /data/jenkins/workspace/rarebeauty-daily-kibana/data:/data -v /data/jenkins/workspace/rarebeauty-daily-kibana/phantom-rb.js:/phantom-rb.js -d wernight/phantomjs  phantomjs /phantom-rb.js
