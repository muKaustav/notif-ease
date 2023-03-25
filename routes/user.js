const express = require('express')
const userController = require('../controllers/user')

const router = express.Router()

router.get('/', userController.getUsers)
router.post('/register', userController.register)

module.exports = router

