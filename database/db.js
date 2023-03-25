require('dotenv').config()
const mongoose = require('mongoose')

let connect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database connected successfully.'))
        .catch(err => console.log(err))
}

module.exports = { connect }