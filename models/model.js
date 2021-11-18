import mongoose from 'mongoose';
let {Schema}=mongoose

const employeeSchema=new Schema({
    firstname:{
        type:String,
    required:true
},
    lastname:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        enum:{
        
        }
    }
});