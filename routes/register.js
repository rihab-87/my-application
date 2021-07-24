const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const{body,validationResult}=require('express-validator')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const user = require("../models/userSchema");
require("dotenv").config({path:'../config/.env'})
 var gravatar = require('gravatar');
//post user
router.post('/',[
body('firstName').isString(),
body('lastName').isAlpha(),
body('profession').isString(),
body('email').isEmail().custom(value=>{
    console.log(value)
  return user.findOne({email:value}).then((data)=>{
  
       if(data){
        throw  new Error("the email is already user")
       }
        return true
      
   })

}),
body('Skills').isString(),
body('linkedin').isString(),
body('github').isString(),
body('phone').isNumeric(),
body('password').isString().isLength({min:5}),
body('passwordConfirmation').isString().isLength({min:5}).custom((value,{req})=>{
    if(value!==req.body.password){
        throw new Error("the password is not confirmed")
    }
    return true
})

], (req,res)=>{

const result=validationResult(req);
console.log(result)
if(!result.isEmpty())
return res.status(400).json({errors:result.array()})

else{
//get user gravatar
 //const avatar=gravatar.url(req.body.email,{s:"200",r:"pg",d:"mm"})

const newUser=new user({
    firstName:req.body.firstName,
lastName:req.body.lastName,
profession:req.body.profession,
Skills:req.body.Skills,
linkedin:req.body.linkedin,
github:req.body.github,
phone:req.body.phone,
email:req.body.email,
password:req.body.password,
passwordConfirmation:req.body.passwordConfirmation,
isadmin:req.body.isadmin,
avatar:gravatar.url(req.body.email,{s:"200",r:"pg",d:"mm"})
})
bcrypt.genSalt(10, function(err, salt) {
    if (err)throw err
    else{
    bcrypt.hash(req.body.password, salt, function(err, hash) {
       newUser.password=hash
       newUser.passwordConfirmation=hash
       console.log(hash)
       newUser.save()
    })}
})

const payload={
     userId:newUser._id,
     role:newUser.isadmin
}
jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
    if (err)throw err
    else{
      return   res.json({token:token,
                          role:payload.role  })
    }
})
}
})




// adddd


// router.put('/add',[
//     body('firstName').isAlpha(),
//     body('lastName').isAlpha(),
//     body('profession').isString(),
//     body('email').isEmail()
//     // .custom(value=>{
//     //     console.log(value)
//     //   return user.findOne({email:value}).then((data)=>{
      
//     //        if(data){
//     //         throw  new Error("the email is already user")
//     //        }
//     //        return true
          
//     //    })
    
//     // })
//     ,
//     body('Skills').isString(),
//     body('linkedin').isString(),
//     body('github').isString(),
//     body('phone').isNumeric(),
//     body('password').isString().isLength({min:5})
//     .custom((value,{req})=>{
//         console.log(value)
//       return user.findOne({email:req.body.email}).then((data)=>{
//       console.log("data",data)
//            if(data.password!==""){
//             throw  new Error("the collab is already existed and registred")
//            }
//            return true
          
//        })
    
//     })
//     ,


//     body('passwordConfirmation').isString().isLength({min:5}).custom((value,{req})=>{
//         if(value!==req.body.password){
//             throw new Error("the password is not confirmed")
//         }
//         return true
//     }),
//     body('isadded').isBoolean().custom((value,{req})=>{
//         if(value===false){
//             throw new Error("the collab is not added")
//         }
//         return true
//     })
    
//     ], (req,res)=>{
    
//     const result=validationResult(req);
//     console.log(result)
//     if(!result.isEmpty())
//     return res.status(400).json({errors:result.array()})
    
//     else{
//     // const newUser=new user(req.body)
//     bcrypt.genSalt(10, function(err, salt) {
//         if (err)throw err
//         else{
//         bcrypt.hash(req.body.password, salt, function(err, hash) {
//            req.body.password=hash
//            req.body.passwordConfirmation=hash
//            console.log(hash)
//            console.log("hashpass",req.body.password)
//            console.log("req.body",req.body)
//            user.findOneAndUpdate({email:req.body.email},req.body,{new:true})
//     .then((newuser)=>{
//     const payload={
//          userId:newuser._id,
//          role:newuser.isadmin
//     }
//     jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
//         if (err)throw err
//         else{
//           return   res.json({token:token,
//                               role:payload.role  })
//         }
//     })
// }
// )

// .catch((err)=>res.status(400).json({errors:[{msg:"error to register colab"}]}))

        
//         })}
//     })
    

//     }
//     })

module.exports=router