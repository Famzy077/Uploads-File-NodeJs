const mongoose = require('mongoose')
const  Schema = mongoose.Schema

const createFiles = new Schema({
    file: Array
})

module.exports = mongoose.model('File', createFiles)