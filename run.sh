#/bin/bash
echo `pwd`
echo '/var/jenkins_home/workspace/rarebeauty-daily-kibana'
ls `pwd`/phantom-rb.js
ls /var/jenkins_home/workspace/rarebeauty-daily-kibana/phantom-rb.js
docker run --env-file=/var/jenkins_home/workspace/rarebeauty-daily-kibana/phantomjs-rb.env -v /var/jenkins_home/workspace/rarebeauty-daily-kibana/data:/data -v /var/jenkins_home/workspace/rarebeauty-daily-kibana/phantom-rb.js:/phantom-rb.js -d wernight/phantomjs  phantomjs /phantom-rb.js
