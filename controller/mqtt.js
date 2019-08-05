const mqtt = require('mqtt')
const client = mqtt.connect('client://broker.hivemq.com')
const email = require("../controller/email")

module.exports = function init(){
  client.on('connect', () => {
     client.subscribe('sensor/flame');
  });

  client.on('message', (topic, message) => {
      switch (topic) {
        case 'sensor/flame':
          email.FireNotification()
        break;
        case 'sensor/smoke':
          email.SmokeNotification()
        break;
      }
  })
}