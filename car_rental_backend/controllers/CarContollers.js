const Car = require('../models/CarModel');
const addCar = require("../models/addCarModel");



const getALLCarDetails = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}

const AddCarData = async (req, res) => {
    const Acd = await addcar.find({}).sort({createdAt : -1})
    res.status(200).json(Acd)
}
  


const createNewCarDetail = async (req, res) => {
    const {img,seater,carType,name,rateperkm,available_Date,Book,fare} = req.body
    try{
    
       const newCar = await Car.create({img,seater,carType,name,rateperkm,available_Date,Book,fare}) 
       res.status(200).json(newCar) 
    }
    catch(error){
       res.status(400).json({error : error.message})
    }
}


const CreateAddCar =async (req,res)=>{
    console.log(req.body)
    const { carname,type,model,milage,perkm,availablefrom,availabletill,image,description,cardetails,details} = req.body
 try{
    const newAddCar = await addCar.create({
        carname,
        type,
        model,
        milage,
        perkm,
        availablefrom,
        availabletill,
        image,
        description,
        cardetails,
        details
    })
    res.status(200).json(newAddCar) 
 }
 catch(error){
    res.status(400).json({error : error.message})
 }
    
}




module.exports = {
    getALLCarDetails,CreateAddCar,createNewCarDetail,AddCarData
}