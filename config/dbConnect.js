const mongoose=require("mongoose");
require("dotenv").config({path:'./config/.env'});
const dbConnect=()=>{
mongoose.connect(process.env.MG_URI,{  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: true})
.then(()=>console.log("DB is connected "))
.catch((err)=>console.log("err"))
}
module.exports=dbConnect