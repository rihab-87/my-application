const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const{body,validationResult}=require('express-validator');
const user = require("../models/userSchema");
require("dotenv").config({path:'../config/.env'});

const authmiddelware=require('../helpers/authmiddelware')
//load user
router.get('/',authmiddelware,(req,res)=>{

    user.findById(req.userid)
    .select("-password -__v -passwordConfirmation")
    .then((user)=>{
        if(!user) 
         return res.status(404).json({errors:[{msg:"user not found"}]})
         else 
       return  res.status(200).json(user)
    })
    .catch((err)=>res.status(500).json({errors:[{msg:"server errors"}]}))
    
    })
// user log in 
router.post('/',[ body('email',"should be an adress mail ").isEmail(),
body('password',"should contain more than 5 charcters ")
 .isLength({min:5}),
//  body('isadded').isBoolean().custom((value,{req})=>{
//     if(value===false){
//         throw new Error("the collab is not added")
//     }
//     return true
// })
],
(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:error.array()})
    }
    else{
        user.findOne({email:req.body.email})
        .then((User)=>{
            if(!User){
              return res.status(404).json({errors:[{msg:"user not found"}]})
            }
            else if(User.isadded===false){
                return res.status(404).json({errors:[{msg:"collaborator is not added"}]})
            }

              else{
                bcrypt.compare(req.body.password,User.password,(err,isMatch)=>{
                    if (err) throw err
               
                   else if (!isMatch){
                   return res.status(400).json({errors:[{msg:"wrong password"}]})}
                   else{
               const payload={
                   userId:User._id,
                   role:User.isadmin
               }
               jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                   if (err) throw err
                   res.send({token:token,
                                role:payload.role})
               
               })}
               })
}
        })

        .catch((err)=>{res.status(500).json({errors:[{msg:"error server"}]})}) 
    }})
//load all users
router.get('/all',authmiddelware,(req,res)=>{

    user.find()
    .select("-password -__v -passwordConfirmation")
    .then((user)=>{ res.status(200).json(user)
    })
    .catch((err)=>res.status(500).json({errors:[{msg:"server errors"}]}))
    
    })

//edit profile
router.put('/:id',authmiddelware,(req,res)=>{
    user.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    
    .then((data)=>{ 
        res.status(200).json(data)})
    .catch((err)=>res.status(400).json({errors:[{msg:"error to update profile"}]}))
})

//delete profile
router.delete('/:id',authmiddelware,(req,res)=>{
    user.findByIdAndDelete({_id:req.params.id})
    
    .then((data)=>{ 
        res.status(200).json(data)})
    .catch((err)=>res.status(400).json({errors:[{msg:"error to delete profile"}]}))
})





    // user added 

//     router.post('/add',[body('email',"should be an adress mail ").isEmail(),
//     body('firstName',"should be a  name ").isString(),
//     body('lastName',"should be a name ").isString()
// ],
//     (req,res)=>{
//         const errors=validationResult(req)
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()})
//         }
//         else{
//             user.findOne({email:req.body.email})
//             .then((User)=>{
//                 if(User){
//                   return res.status(404).json({errors:[{msg:"user is already added"}]})
//                 }
//                 else{
//                     var newuser= new user(req.body)
//                     console.log(newuser)
//                     newuser.save()
//                     .then((user)=>res.status(200).json(user))
//                     .catch((err)=>res.status(400).send({errors:[{msg:"erreur to add new user"}]}))
//     }
//             })
    
//             .catch((err)=>{res.status(500).json({errors:[{msg:"error server"}]})}) 
//         }})

    
    module.exports=router
