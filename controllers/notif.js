const userModel = require('../models/user')
const notifModel = require('../models/notif')
const Quote = require('inspirational-quotes')
var oneLinerJoke = require('one-liner-joke')
const { producer } = require('../kafka/kafka')

const sendBatch = async (req, res) => {
    const { optInStatus } = req.body

    let message = ''

    let joke = oneLinerJoke.getRandomJoke()['body']
    let quote = Quote.getQuote({ author: false })['text']

    if (optInStatus === 0) {
        message = joke
    } else if (optInStatus === 1) {
        message = quote
    } else {
        message = 'Joke: ' + joke + ' || Quote: ' + quote
    }

    let users = await userModel.find({ optInStatus })

    if (!users) {
        return res.status(404).json({
            message: 'No users found'
        })
    }

    users.forEach(async (user) => {
        const { _id, email } = user

        const notif = await notifModel.create({
            userId: _id,
            status: 'PENDING',
            message
        })

        notif.save()

        const payload = {
            topic: 'notification',
            messages: [{
                value: JSON.stringify({
                    email, message, notif: notif._id
                })
            }]
        }

        await producer.send(payload)
    })

    res.send({
        message: 'Notifications sent'
    })
}

const sendSingle = async (req, res) => {
    const { email } = req.body

    const user = await userModel.findOne({ email: email })

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        })
    }

    let { _id, optInStatus } = user

    if (!optInStatus) {
        return res.status(400).json({
            message: 'User has not opted in for notifications'
        })
    }

    let message = ''

    let joke = oneLinerJoke.getRandomJoke()['body']
    let quote = Quote.getQuote({ author: false })['text']

    if (optInStatus === 0) {
        message = joke
    } else if (optInStatus === 1) {
        message = quote
    } else {
        message = 'Joke: ' + joke + ' || Quote: ' + quote
    }

    const notif = await notifModel.create({
        userId: _id,
        status: 'PENDING',
        message
    })

    notif.save()

    const payload = {
        topic: 'notification',
        messages: [{
            value: JSON.stringify({
                email, message, notif: notif._id
            })
        }]
    }

    await producer.send(payload)

    res.send({ message: 'Notification sent' })
}

module.exports = { sendBatch, sendSingle }