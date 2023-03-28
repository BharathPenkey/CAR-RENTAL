const express = require('express')
const {getALLCarDetails,CreateAddCar,createNewCarDetail}= require('../controllers/CarControllers')

const Car = require("../models/CarModel")
const router = express.Router();


router.get('/carDetails', getALLCarDetails);

router.post('/newBooking', createNewCarDetail)


router.post('/newBooking', createNewCarDetail)


router.post("/addcar",CreateAddCar)

module.exports = router
