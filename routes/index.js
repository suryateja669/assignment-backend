const express = require('express');
const router = express.Router();

const homeController=require('./controllers/home_controller')

router.get('/get-route', homeController.home);

router.post('/create-route',homeController.create)

module.exports = router;