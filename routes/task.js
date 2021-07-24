const express=require('express');
const router=express.Router();
const task=require('../models/taskSchema')
const { body, validationResult } = require('express-validator');
//post new task
router.post('/',
[body("taskName","the name of project must be text").isString(),
     body("taskDesc","the description must be text").isString(),
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
var newTask= new task(req.body)                                                                                                                                                                                                                                                                                     
console.log(newTask)
newTask.save()
.then((task)=>res.status(200).json(task))
.catch((err)=>res.status(400).send({errors:[{msg:"erreur to add new task"}]}))
        }   
})
//get all task 
router.get('/',(req,res)=>{
    task.find()
    .then((tasks)=>res.status(200).json(tasks))
    .catch((err)=>res.status(404).json({errors:[{msg:"list of tasks not found"}]}))
})
// edit task
router.put('/:id',(req,res)=>{
    task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).populate('project user')
    .then((task)=>res.status(200).json(task))
    .catch((err)=>res.status(400).json({errors:[{msg:"error on updating task"}]}))
})
// delete task
router.delete('/:id',(req,res)=>{
    task.findByIdAndDelete({_id:req.params.id})
    .then((task)=>res.status(200).json(task))
    .catch((err)=>res.status(400).json({errors:[{msg:"error on deleting task"}]}))
})
//get all task of one project
router.get('/:id',(req,res)=>{
    task.find({project:req.params.id}).populate('user project')
    .then((tasks)=>res.status(200).json(tasks))
    .catch((err)=>res.status(404).json({errors:[{msg:"list of tasks not found"}]}))
})
//delete project tasks
router.delete('/project/:id',(req,res)=>{
    task.deleteMany({project:req.params.id})
    .then((task)=>res.status(200).json(task))
    .catch((err)=>res.status(400).json({errors:[{msg:"error on deleting task"}]}))
})


module.exports=router