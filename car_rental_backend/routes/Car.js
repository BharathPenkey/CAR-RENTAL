const express = require('express')
const {getALLCarDetails,CreateAddCar}= require('../controllers/CarContollers')

const Car = require("../models/CarModel")
const router = express.Router();


router.get('/carDetails', getALLCarDetails);

router.post("/addcar",CreateAddCar)

module.exports = router
