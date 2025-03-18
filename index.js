let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors')
let bodyParser=require('body-parser')
let env=require('dotenv').config();
const employeeModel=require('./model/model')
const employeeRouter=require('./controller/employeeRoutes.js')
let app=express();
app.use(express.json());
app.use(cors({origin:true,credentials:true}))
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewURLParser:true,
    useUnifiedTopology:true
});
app.use(employeeRouter);

app.listen(8080,()=>{

});