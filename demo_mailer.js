var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your@gmail.com',
        pass: 'yourpassword'
    }
});

var mailerOptions = {
    from: 'your@gmail.com',
    to: 'recepient@email.com',
    subject: 'email subject',
    text: 'email body'
};

transporter.sendEmail(mailerOptions, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
});