const express = require('express');
const router = express.Router();
const userControllers = require('../Controller/user.controller')

router.route('/')
.get(userControllers.getUser)
.post(userControllers.postUser)
// .post(userControllers.postLogin)

module.exports = router;



