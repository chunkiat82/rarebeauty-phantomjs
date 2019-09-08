var AWS = require('aws-sdk'),
    fs = require('fs');
require('dotenv').config();
var moment = require('moment');
var folderStructure = moment().format('YYYY/MM/DD');
var fileName = moment().format('YYYYMMDD');

// Read in the file, convert it to base64, store to S3
fs.readFile(`${process.env.FULLPATH}/${process.env.FILENAME}.png`, function (err, data) {
    if (err) { throw err; }

    var base64data = new Buffer(data, 'binary');

    s3 = new AWS.S3({ params: { Bucket: 'rb-accounts', timeout: 6000000 } });

    var s3 = new AWS.S3();
    s3.putObject({
        Key: `${folderStructure}/RareBeauty-DailyTotal-${fileName}.png`,
        Bucket: 'rb-accounts',
        Body: base64data,
        //ACL: 'public-read'
    }, function (resp) {
        console.log(arguments);
        console.log('Successfully uploaded package.');
    });

});