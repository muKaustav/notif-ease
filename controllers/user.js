const userModel = require('../models/user')

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send({
            users: users
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Error getting users',
            err
        })
    }   
}

const register = async (req, res) => {
    const { name, email, optInStatus } = req.body

    const user = new userModel({ name, email, optInStatus })

    await user.save()

    res.send(user)
}

module.exports = { getUsers, register }