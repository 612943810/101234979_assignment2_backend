let express=require('express');
const { model } = require('mongoose');
const employeeModel=require('../model/model')
let app=express();

app.get("/api/v1/employees",async(req,res)=>{
const employees=await employeeModel.find({});
try{
    res.json(employees)
}catch(employeeError){
    res.status(500).json(employeeError)
}
});

app.post("/api/v1/employees",async(req,res)=>{
    const employees=new employeeModel(req.body)
    try{
        await employees.save();
        res.json("Data is posted.")
    }catch(employeeError){
        res.status(500).json(employeeError)
    }
    });

    app.get('/api/v1/employees/:id',async(req,res)=>{
        let employeeId=req.params.id;
        let  employees=await employeeModel.findById({_id:employeeId})
        try{
            res.json(employees)
        }catch(employeeError){
            res.status(500).json(employeeError)
        }
        });
        app.put('/api/v1/employees/:id',async(req,res)=>{
           
           try{  
        
       await employeeModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,returnOriginal:false,useFinfAndModify:false});  
            res.json("This employee has been updated.")
     await employeeModel.save();  
            }catch(employeeError){
                res.status(500).json(employeeError)
            }
            });

            app.delete('/api/v1/employees/:id',async(req,res)=>{
              try{ 
             let employeeDelete=await employeeModel.findByIdAndDelete(req.params.id);
          if(!employeeDelete==true){
                res.json('No Employee found.')
          }else{
              res.json('Employee Deleted!')
          }
              
                }catch(employeeError){
                    res.status(500).json(employeeError)
                }
                });
module.exports=app