const express = require('express')
const path = require('path')
const multer = require('multer')
const cors = require('cors')
const fileControl = require('./controller/fileControl')
const ConnectDB = require('./config/connectDB')
const PORT = process.env.PORT || 3005
require('dotenv').config()
// connect DB
ConnectDB()

const Uploads = multer({dest: 'uploads/'})

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.get('/', (req, res, next) => {
    res.render("index")
})
app.post('/', Uploads.single('myFile'), (req, res, next) => {
    console.log(req.file)
    res.end()
})
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})