import mqtt from 'mqtt'

const topic = '/hfp/v2/journey/ongoing/vp/tram/0040/+/+/+/+/+/+/0/#'

const client = mqtt.connect('wss://mqtt.hsl.fi:443/', {clientId: 'hsl_live_map'})

client.subscribe(topic, {qos: 0})

export {client}
