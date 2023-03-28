const mongoose = require('mongoose')


const Schema = mongoose.Schema
const addCarSchema = new Schema({
    carname: String,
    type: Number,
    model: String,
    milage: Number,
    perkm: Number,
    image: String,
    availablefrom:Date,
    availabletill:Date, 
    description:  String,
    cardetails:  String,
    details:  String,
})


module.exports =mongoose.model("addCar",addCarSchema);  

