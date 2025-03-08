const mongoose = require('mongoose')
//const url = "mongodb://localhost:27017/productdb"
const url = "mongodb+srv://Arjundevjha:Welcome108@cluster0.gd5icsk.mongodb.net/productdb"
mongoose.connect(url, {}, function(error) {
    if (error) {
        console.log("connection failed", error)
    } else {
        console.log("Database connection successful")
    }
})