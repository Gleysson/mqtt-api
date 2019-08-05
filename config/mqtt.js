const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://soldier.cloudmqtt.com:18699",{
    clientId:"mqttjs01",
    username:"jcxdedtv",
    password:"7hgihomr2Ee6",
})

module.exports = client