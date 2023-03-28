const Car = require('../models/CarModel')


const getALLCarDetails = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}

const createNewCarDetail = async (req, res) => {
    const {img,seater,name,rateperkm,available_Date,Book,fare} = req.body
    try{
    
       const newCar = await Car.create({img,seater,name,rateperkm,available_Date,Book,fare}) 
       res.status(200).json(newCar) 
    }
    catch(error){
       res.status(400).json({error : error.message})
    }
}

module.exports = {
    getALLCarDetails,
    createNewCarDetail
}