const express = require("express")
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
const userModel = require("./model/userMode")

const authRoute = require("./router/authRoute")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/mycompiler",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
   console.log("Db connected");
}).catch(err=>{
    console.log(err);
})

async function saveData(){
    const data = await userModel.create({
        email:"yogesh",
        password:"yogesh123"
    })

    console.log(data);
}

saveData();
app.get("/",(req,res)=>{
    res.send("Your server is running fine");
})

app.use("/auth",authRoute)

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is Running");
})