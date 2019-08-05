const sender = require("../config/email");

const FireEmail = {
	from: 'SensorFire <gleyssongaspar2@gmail.com>', // sender address
	to: 'gleyssongaspar@gmail.com', // list of receivers
	subject: 'Alerta de Incêndio!', // Subject line
	html: '<p>Alerta</p>'// plain text body
};

const sendEmail = (options) => {
	sender.sendMail(options, function (err, info) {
		if(err)
		  console.log(err)
		else
		  console.log("Send Notification Success!")
	 });
}

module.exports = {
	FireNotification: function(){
		sendEmail(FireEmail)
	},
	SmokeNotification: function(){
		sendEmail(FireEmail)
	}
}

 