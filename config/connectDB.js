const mongoose = require('mongoose')
const connectDB = async(req, res) => {
    try {
        let conn = await  mongoose.connect('mongodb://localhost:27017/storeData')
        console.log("Connected to DataBase successfully")
    } catch (error) {
        console.log(error)
        res.status(error)
    }
}
module.exports = connectDB