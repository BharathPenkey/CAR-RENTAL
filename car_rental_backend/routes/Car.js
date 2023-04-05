const express = require('express')
const {getALLCarDetails,CreateAddCar,editAddedCar, createCarDetails,AddCarData}= require('../controllers/CarContollers')
const { getbookdetail,bookdetailcontrol,updatebooking} = require('../controllers/destinationControllers')

const router = express.Router();


router.get('/carDetails', getALLCarDetails);
router.post('/createCar', createCarDetails)


router.get('/adminpageCars', AddCarData)

router.put('/editcar/:id', editAddedCar)
router.post('/addcar',CreateAddCar)



router.get('/getbookingdetails',getbookdetail);
router.post('/bookingdetails',bookdetailcontrol);

router.put('/updatebooking/:id',updatebooking);


module.exports = router;