const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.0.100:9092']
})

const producer = kafka.producer()

module.exports = { producer }