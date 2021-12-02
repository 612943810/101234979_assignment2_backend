let express=require('express');
const { model } = require('mongoose');
const employeeModel=require('../model/model')
let app=express();

app.get("/api/v1/employees",async(req,res)=>{
const employees=await employeeModel.find({});
try{
    res.send(employees)
}catch(employeeError){
    res.status(500).send(employeeError)
}
});

app.post("/api/v1/employees",async(req,res)=>{
    const employees=new employeeModel(req.body)
    try{
        await employees.save();
        res.send("Data is posted.")
    }catch(employeeError){
        res.status(500).send(employeeError)
    }
    });

module.exports=app