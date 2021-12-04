let mongoose=require('mongoose')

const EmployeeSchema=new mongoose.Schema({
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
       
        match:/^[[A-Za-z0-9+\.?A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]]*/,
        message:"Email is not in valid format."
        
    }
});

const Employee=mongoose.model("Employee",EmployeeSchema)
module.exports=Employee;