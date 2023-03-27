const Car = require('../models/CarModel')


const getALLCarDetails = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
}


module.exports = {
    getALLCarDetails
}

