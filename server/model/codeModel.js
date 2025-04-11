const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true,
    },
    htmlCode:{
        type:String,
        require:true,
        trim:true,
    },
    cssCode:{
        type:String,
        trim:true,
    },
    jsCode:{
        type:String,
        trim:true,
    }
})

const codeModel = mongoose.model("Code",codeSchema);

module.exports = codeModel;