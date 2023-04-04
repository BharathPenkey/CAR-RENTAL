// const Car = require('../models/CarModel');
const Addcar = require("../models/addCarModel");



const getALLCarDetails = async (req, res) => {
    const cars = await Addcar.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}


    
  



const CreateAddCar =async (req,res)=>{
    console.log(req.body)
    const { carname,type,model,milage,perkm,availablefrom,availabletill,image,description,cardetails,details} = req.body

    const newAddCar = new Addcar({
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
        newAddCar.save()
       .then(() => {
        res.send({ message: "successful" });
      })
      .catch((err) => {
        res.send({ message: err });
        console.log(err);
      });
 
    
}
const editAddedCar = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No Such Id"})
    }
    const editedCar = await Addcar.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error : "No such workout"})
    }
    res.status(200).json(editedCar)
}



module.exports = {
    getALLCarDetails,CreateAddCar,editAddedCar
}