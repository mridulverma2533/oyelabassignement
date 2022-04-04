const express=require("express");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());
const port = 8000;
require("./db")
const registerroutes=require("./routes/adminroutes")
app.use(registerroutes)

app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`);
})