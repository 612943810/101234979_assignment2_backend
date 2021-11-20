import mongoose from 'mongoose';
let {Schema}=mongoose

const employeeSchema=new Schema({
    firstname:{
        type:String,
    required:[true,"First Name was not entered."]
},
    lastname:{
        type:String,
        required:[true,"Last Name was not entered."]
    },
    emailid:{
        type:String,
        required:[true,"Email was not entered."],
        enum:{
        match:[/.@/],
        message:"Email is not in valid format."
        }
    }
});