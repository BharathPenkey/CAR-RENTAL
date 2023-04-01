const express = require('express')
// const {getALLCarDetails,CreateAddCar,createNewCarDetail,AddCarData}= require('../controllers/CarContollers')

const {getALLCarDetails,CreateAddCar,createNewCarDetail}= require('../controllers/CarContollers')

const router = express.Router();


router.get('/carDetails', getALLCarDetails);

router.post('/newBooking', createNewCarDetail)

router.post('/addcar',CreateAddCar)
// router.get('/dataadded',AddCarData)
// router.get('/addcar',CreateAddCar)
module.exports = router;