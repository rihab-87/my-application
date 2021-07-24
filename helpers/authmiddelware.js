const jwt=require('jsonwebtoken')
require('dotenv').config({path:'../config/.env'})


module.exports=(req,res,next)=>{
    let token=req.header('auto-tok')
    console.log(token)
if(!token){
    return res.status(401).json({errors:[{msg:"you are nnot authorized" }]});
}
jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
    if (err){throw err}
   req.userid=payload.userId
next()
})

}