let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors')
let bodyParser=require('body-parser')
const employeeModel=require('./model/model')
const employeeRouter=require('./controller/employeeRoutes.js')
let app=express();
app.use(express.json());
app.use(cors({origin:true,credentials:true}))
mongoose.connect("mongodb+srv://root:mongodb@comp3123.wcgkp.mongodb.net/101234979_assignment2?retryWrites=true&w=majority",{
    useNewURLParser:true,
    useUnifiedTopology:true
});
app.use(employeeRouter);

app.listen(8080,()=>{

});