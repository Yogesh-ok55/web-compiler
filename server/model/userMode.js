const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    }

})

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;

