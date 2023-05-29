const express = require('express');
const router = express.Router();
const passport = require('passport')
const homeController = require('../Controller/home.controller')

router.route('/')
.get(homeController.homeGet)
.post(homeController.homePost)

module.exports = router;