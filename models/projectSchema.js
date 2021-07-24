const mongoose=require('mongoose');
Schema = mongoose.Schema;
const projectSchema=new mongoose.Schema({
    projectName:String,
    projectDesc:String,
    startingDate:Date,
    endingDate:Date,
     status:{type:String,enum:{values:['Done','In progress','Undone'],message:'{VALUE} is not supported'}},
      progressproject:Number,
     user : [{ type: Schema.Types.ObjectId, ref: 'user' }],
    createdAt: { type:Date , required:true, default:Date.now},
      updatedAt:  { type:Date , required:true, default:Date.now}
})
module.exports=mongoose.model('project',projectSchema)