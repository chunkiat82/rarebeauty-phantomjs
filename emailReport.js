var nodemailer = require('nodemailer');
var moment = require('moment');
require('dotenv').config();

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);
console.log(process.env.FILENAME);
console.log(process.env.FULLPATH);

var path = `${process.env.FULLPATH}/${process.env.FILENAME}.png`

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

var now = moment();

const mailOptions = {
    from: 'jenkins@soho.sg', // sender address
    to: process.env.EMAIL, // list of receivers
    subject: `Rare Beauty Report - ${now}`, // Subject line
    attachments: [        
        {   // file on disk as an attachment
            filename: `report-${now}.png`,
            path: path // stream this file
        }
    ]
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });