const mongoose=require('mongoose');
const postSchema= new mongoose.Schema ({
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
title:String,
description:String,
createdAt: { type:Date , required:true, default:Date.now},
updatedAt: { type:Date , required:true, default:Date.now}
})
module.exports=mongoose.model('post',postSchema)