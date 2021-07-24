const mongoose=require('mongoose');


const userSchema= new mongoose.Schema ({
firstName:String,
lastName:String,
profession:String,
Skills:String,
linkedin:String,
github:String,
phone:Number,
email:String,
password:String,
passwordConfirmation:String,
isadmin:Boolean,
avatar:String,
createdAt: { type:Date , required:true, default:Date.now},
updatedAt: { type:Date , required:true, default:Date.now}

})
module.exports=mongoose.model('user',userSchema)