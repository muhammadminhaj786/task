const express = require('express')

const router = express.Router()

const {userSignup} = require('../controller/user')

router.post('/api/createuser',userSignup)

module.exports = router