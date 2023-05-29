const express = require('express');
const router = express.Router();
const passport = require('passport')
const homeController = require('../Controller/home.controller')

router.route('/')
.get('/home',passport.authenticate('jwt', { session: false }),homeController.homeGet)

module.exports = router;