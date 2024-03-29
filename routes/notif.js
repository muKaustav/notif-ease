const express = require('express')
const notifController = require('../controllers/notif')

const router = express.Router()

router.post('/batch', notifController.sendBatch)
router.post('/', notifController.sendSingle)

module.exports = router