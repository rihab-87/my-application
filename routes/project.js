const express=require('express');
const router=express.Router();
const project=require('../models/projectSchema')
const { body, validationResult } = require('express-validator');
const authmiddelware=require('../helpers/authmiddelware')

//post create new poject
router.post('/',
[body("projectName","the name of project must be text").isString(),
     body("projectDesc","the description must be text").isString(),
    body('startingDate', 'the startingdate must be a validate date'),
    body('endingDate','tne endingDate must be a validate date ')
    // .custom((value,{req})=>{
    //     if(value< req.body.startingDate)
    //     {
    //         throw new Error('the endingDate muste be greater then startingDate')
    //     }
    //  return true
    // })
]
   , (req,res)=>{
        const result = validationResult(req)
        console.log(result)
        if(!result.isEmpty()) {
            return res.status(500).json({errors:result.array()})
        }
        else{
var newProject= new project(req.body)
console.log(newProject)
newProject.save()
.then((project)=>res.status(200).json(project))
.catch((err)=>res.status(400).send({errors:[{msg:"erreur to add new project"}]}))
        }   
})
//get all projects 

router.get('/',authmiddelware, (req,res)=>{
    project.find()
    .then((project)=>res.status(200).json(project))
    .catch((err)=>res.status(404).json({errors:[{msg:"error  server in loading project"}]}))

})
//delet one project by id
router.delete('/:id',authmiddelware, (req,res)=>{
  project.findByIdAndDelete({_id:req.params.id}) 
  .then((data)=>res.status(200).json(data)) 
  .catch((err)=>res.status(400).json({errors:[{msg:"error to delete project"}]}))
})
//edit project
router.put('/:id',authmiddelware,(req,res)=>{
    project.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((data)=>{ console.log(data)
        res.status(200).json(data)})
    .catch((err)=>res.status(400).json({errors:[{msg:"error to update project"}]}))
})
//get one project by id 
router.get('/:id',authmiddelware, (req,res)=>{
    project.findOne({_id:req.params.id}).populate('user')
    .then((data)=>res.status(200).json(data)) 
    .catch((err)=>res.status(400).json({errors:[{msg:"error to get project"}]}))
  })




module.exports=router