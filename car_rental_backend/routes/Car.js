const express = require('express')
const {getALLCarDetails,CreateAddCar,editAddedCar}= require('../controllers/CarContollers')
const { getbookdetail,bookdetailcontrol,updatebooking} = require('../controllers/destinationControllers')

const router = express.Router();


router.get('/carDetails', getALLCarDetails);

router.post('/editcar', editAddedCar)

router.post('/addcar',CreateAddCar)


router.get('/getbookingdetails',getbookdetail);



router.post('/bookingdetails',bookdetailcontrol);



router.put('/updatebooking/:id',updatebooking);


module.exports = router;