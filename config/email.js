const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gleyssongaspar2@gmail.com',
        pass: 'm@belm1guel'
    }
});