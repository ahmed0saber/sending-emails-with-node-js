var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const MY_PASSWORD = process.env.PASSWORD;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ahmed0saber33@gmail.com',
        pass: MY_PASSWORD
    }
});

// send text or html to multiple accounts
var mailOptions = {
    from: 'ahmed0saber33@gmail.com',
    to: 'ahmed0saber33@gmail.com, ahmed0saber33@gmail.com',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    html: `<h1>Hello ahmed0saber,</h1><h3>Good morning!</h3><p>I'm sending you some html content</p>`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});