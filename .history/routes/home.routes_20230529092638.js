const express = require('express');
const router = express.Router();
const homeController = require('../Controller/home.controller')

router.route('/')
.get('/home',homeController.homeGet)

module.exports = router;