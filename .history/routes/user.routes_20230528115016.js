const express = require('express');
const router = express.Router();
const userControllers = require('../Controller/user.controller')

router.route('/')
.get(userControllers.getUser)
router.route('/register').post(userControllers.postUser)
router.route('/login').post(userControllers.postLogin)

module.exports = router;



