const userModel = require('../models/user')
const notifModel = require('../models/notif')
const { producer } = require('../kafka/kafka')
var CronJob = require('cron').CronJob

module.exports = () => {
    // run cron job every 10 minutes
    var job = new CronJob('*/10 * * * *', async () => {
        let failedNotifs = await notifModel.find({ status: 'FAILED' })

        if (failedNotifs.length > 0) {
            failedNotifs.forEach(async (notif) => {
                if (notif.retryCount < 3) {
                    const user = await userModel.findOne({ _id: notif.userId })

                    const payload = {
                        topic: 'notification',
                        messages: [{
                            value: JSON.stringify({
                                email: user.email, message: notif.message, notif: notif._id
                            })
                        }]
                    }

                    await producer.send(payload)

                    await notifModel.findByIdAndUpdate(notif._id, { status: 'PENDING' })

                    console.log('Retrying failed job' + notif._id)
                }
            })
        }
    }, null, true, 'Asia/Kolkata')
}
