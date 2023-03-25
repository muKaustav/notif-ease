const userModel = require('../models/user')

const getUsers = async (req, res) => {
    const users = await userModel.find({})

    res.send(users)
}

const register = async (req, res) => {
    const { name, email, optInStatus } = req.body

    const user = new userModel({ name, email, optInStatus })

    await user.save()

    res.send(user)
}

module.exports = { getUsers, register }