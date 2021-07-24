const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const{body,validationResult}=require('express-validator');
const post=require('../models/postSchema');
const authmiddelware=require('../helpers/authmiddelware')

//add new post
router.post('/',authmiddelware,(req,res)=>{
const newpost=new post({...req.body,owner:req.userid})
newpost.save()
.then((post)=>res.status(201).json(post))
.catch((err)=>res.status(400).json({errors:[{msg:"error to add new post"}]}))

})
//get post bu usrid
router.get('/',authmiddelware,(req,res)=>{
post.find({owner:req.userid})
.then((post)=>res.status(201).json(post))
.catch((err)=>res.status(400).json({errors:[{msg:"error to get post"}]}))

})
module.exports=router