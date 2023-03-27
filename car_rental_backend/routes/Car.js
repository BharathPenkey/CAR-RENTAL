const express = require('express')
const {getALLCarDetails}= require('../controllers/CarContollers')

const router = express.Router();

router.get('/carDetails', getALLCarDetails);


module.exports = router
