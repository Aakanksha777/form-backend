const mongoose = require("mongoose")


//creating scheme:
const userSchema = new mongoose.Schema({
    username : String,
    password : String
})

mongoose.model('user', userSchema)
