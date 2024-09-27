const express = require('express')
const fileControl = require('../controller/fileControl')
const router = express.Router()


router.route('/')
    .post(fileControl.createFiles)

module.exports = router