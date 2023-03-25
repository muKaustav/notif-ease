require('dotenv').config()
const cors = require('cors')
const express = require('express')
const userRoutes = require('./routes/user')
const notifRoutes = require('./routes/notif')
const retryFailedNotifs = require('./cron/retryFailedNotifs')
const { producer } = require('./kafka/kafka')
const { consumer, run } = require('./kafka/consumer')
require('./database/db').connect()

start = async () => {
    await producer.connect()
    await consumer.connect()
    await run()

    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.send({
            message: "Welcome to the notif-ease notification microservice.",
            ip: req.ip,
            time: new Date().toLocaleString()
        })
    })

    app.use('/api/user', userRoutes)
    app.use('/api/send-notif', notifRoutes)

    app.get("*", (req, res) => {
        res.redirect("/")
    })

    PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
        retryFailedNotifs()
    })
}

start().catch(console.error)

