var nodemailer = require('nodemailer');
var moment = require('moment');
require('dotenv').config();

console.log(process.env.PASSWORD);
console.log(process.env.filename);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rarebeauty@soho.sg',
        pass: `${process.env.PASSWORD}`
    }
});

var now = moment();

const mailOptions = {
    from: 'jenkins@soho.sg', // sender address
    to: 'rarebeauty@soho.sg', // list of receivers
    subject: `Rare Beauty Report - ${now}`, // Subject line
    attachments: [        
        {   // file on disk as an attachment
            filename: `report-${now}.png`,
            path: `/var/jenkins_home/workspace/rarebeauty-daily-kibana/data/${process.env.filename}.png` // stream this file
        }
    ]
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });