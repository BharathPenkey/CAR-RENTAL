
const Car = require('../models/CarModel');
const Addcar = require('../models/addCarModel');



const getALLCarDetails = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}
const createCarDetails = async (req, res) => {
    const {img, seater,carType,name,rateperkm,available_Date,Book, fare} = req.body
    try{
        const newCar = await Car.create({img, seater,carType,name,rateperkm,available_Date,Book, fare})
        res.status(200).json(newCar)
    }
    catch(error){
        res.status(400).json({error : error.message})
     }

}
 
const AddCarData = async (req, res) => {
    try {
      const cardetails = await Addcar.find({}).sort({createdAt : -1});
      res.status(200).json(cardetails);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
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
        return res.status(404).json({error : "No such car"})
    }
    res.status(200).json(editedCar)
}



module.exports = {

    getALLCarDetails,CreateAddCar,editAddedCar,AddCarData,createCarDetails

}