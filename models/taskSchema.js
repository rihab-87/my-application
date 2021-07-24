const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    taskName:String,
    taskDesc:String,
    startingDate:Date,
    endingDate:Date,
    user : { type: Schema.Types.ObjectId, ref: 'user' },
    project : { type: Schema.Types.ObjectId, ref: 'project' },
    status:{type:String,enum:{values:['Done','In progress','Undone'],message:'{VALUE} is not supported'}},
     progression:Number, 
     progValidation:String,
    createdAt: { type:Date , required:true, default:Date.now},
      updatedAt:  { type:Date , required:true, default:Date.now}
})
module.exports=mongoose.model('task',taskSchema)