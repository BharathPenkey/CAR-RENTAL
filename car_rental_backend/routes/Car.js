const express = require('express')
const {createNewBooking, getALLCarDetails}= require('../controllers/CarContollers')



const router = express.Router();

router.get('/carDetails', getALLCarDetails);

router.post('/newBooking', createNewBooking)


module.exports = router
