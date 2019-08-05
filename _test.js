const mqtt = require('mqtt')
const client = mqtt.connect('client://broker.hivemq.com')


client.on('connect', function(){
    console.log("Connectado Teste")

    if(client.connected){
        let f = client.publish('sensor/flame', '99');
        console.log("Publicando")
    }
});


