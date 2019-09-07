var nodemailer = require('nodemailer');
var moment = rquire('moment');

console.log(process.env);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rarebeauty@soho.sg',
        pass: `${process.env.password}`
    }
});

var now = moment();

const mailOptions = {
    from: 'jenkins@soho.sg', // sender address
    to: 'rarebeauty@soho.sg', // list of receivers
    subject: `Rare Beauty Report - ${now}`, // Subject line
    html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });