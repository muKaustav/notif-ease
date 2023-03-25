const nodemailer = require('nodemailer')
const notifModel = require('../models/notif')

let sendMail = (email, message, notif_id) => {
    let Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD
        }
    })

    let mailOptions = {
        from: "Hostel Bazaar",
        to: email,
        subject: "Hostel Bazaar | Daily Checkup",
        html: message
    }

    Transport.sendMail(mailOptions, async (error, response) => {
        if (error) {
            console.log(error)

            await notifModel.findByIdAndUpdate(notif_id,
                { status: 'FAILED', $inc: { retryCount: 1 } })
        } else {
            console.log("Message sent")

            await notifModel.findByIdAndUpdate(notif_id, { status: 'SENT' })
        }
    })
}

module.exports = sendMail