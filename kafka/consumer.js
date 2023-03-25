const { Kafka } = require('kafkajs')
const sendMail = require('../utils/sendMail')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092']
})

const consumer = kafka.consumer({
    groupId: 'notification-group'
})

const run = async () => {
    try {
        await consumer.connect()
        await consumer.subscribe({ topic: 'notification', fromBeginning: true })
        await consumer.run({
            eachMessage: async ({ message }) => {
                let payload = JSON.parse(message.value.toString())
                console.log(payload['email'], payload['message'], payload['notif'])

                sendMail(payload['email'], payload['message'], payload['notif'])
            }
        })
    } catch (e) {
        console.error(`Error in consumer: ${e.message}`, e)
    }
}

module.exports = { consumer, run }
