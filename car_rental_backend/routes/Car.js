const express = require('express')
const {getALLCarDetails,createNewCarDetail}= require('../controllers/CarControllers')

const router = express.Router();

router.get('/carDetails', getALLCarDetails);

router.post('/newBooking', createNewCarDetail)



module.exports = router
