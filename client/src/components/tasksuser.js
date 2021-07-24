import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadtask } from '../actions/taskactions'
import Editstatus from './Editstatus'
import tasksuser from'../style/tasksuser.css'
import check from '../icons/check.svg';
import update from '../icons/update.svg';
import icons8tâches from '../icons/icons8tâches.gif';
import { Container,Table } from 'react-bootstrap'
import Editprogress from './editprogress'
import moment from 'moment'
import Searchtask from './searchtask'
import Uservalid from './uservalid'
moment().format();

function Tasksuser({match}) {

console.log(match.params)

const dispatch = useDispatch()
const[load,setLoad]=useState(true)
const[search,setSearch]=useState(false)

useEffect(() => {
  setTimeout(() => {
    dispatch(loadtask(match.params.projectid))
  }, 1000);

  // dispatch(loadtask(match.params.projectid))
},[load,dispatch])

const handleload=(val)=>{
  setLoad(!val)
  }

const alltask=useSelector(state=>state.task.taskdata)
console.log(alltask)

const tasksuser=alltask.length?alltask.filter((el)=>el.user._id ===match.params.userid):null
console.log(tasksuser)
// const project=tasksuser.length?tasksuser.filter((el)=>el.project._id ===match.params.projectid):null
// console.log(project)
const[searchtask,setSearchtask]=useState(tasksuser)
 const nameproj= alltask? alltask.find((el)=>el.project._id===match.params.projectid):null

 const handlesearch=(val)=>{
  setSearchtask(val)
  setSearch(true)

}
const taskaffiche= search?searchtask:tasksuser

//  console.log(projectname)
const headtab=[ "Name","Description","Status","Starting Date","ending Date","%progress","Progress Validation "]

    return (
        <div>
          <Searchtask alltask={tasksuser} handlesearch={handlesearch}/>

       



          <h1 style={{textAlign:"center",marginBottom:"30px",fontStyle:"italic", margin:"auto"}} > {nameproj?nameproj.project.projectName:null}</h1> 
            
             {taskaffiche? 
         <Container>
        <div className="title_icon"   style={{display:"flex",justifyContent:"flex-start", alignItems:"center",marginBottom:"30px",fontStyle:"italic"}}>
        <img src={icons8tâches } alt="taches icon" style={{width:"30px",margin:"0px"}}/>
        <h2 style={{width:"300px",margin:"0px"}}> Tasks</h2></div>
    
    <Table responsive className="table-light table-hover tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" ,margin:"auto" }}>
    <caption>Tasks</caption>
<thead className= "headus  " >
<tr  className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px", fontWeight:"bold",textAlign:"center",height:"80px" }}>
    {/* <th >{projectname}</th>  */}
    <th style={{  verticalAlign:"middle",   fontFamily:  "'Roboto',  sans-serif " , fontSize:"18px", fontWeight:"bold",height:"70px"}}>Tasks</th>
  
  {headtab.map((el, index) => (
    <th style={{verticalAlign:"middle"}} key={index}>{el}</th>
  ))}
 
</tr>
</thead>
        {taskaffiche?taskaffiche.map((el,index)=>
        <tbody  className= "text-center" >
            <tr className="align-middle" style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"16px", fontWeight:"bold",textAlign:"center",height:"80px"}} >
            <td style={{verticalAlign:"middle"}} > {index}</td>
        <td style={{verticalAlign:"middle"}}> {el.taskName}   </td> 
           <td style={{verticalAlign:"middle"}}>  {el.taskDesc}   </td>
            <td style={{verticalAlign:"middle"}}><Editstatus id= {el._id} el= {el.status} choice={'task'} progress={el.progression} handleload={handleload} load={load}/> </td> 

<td style={{verticalAlign:"middle"}}> {moment(el.startingDate).format('YYYY-MM-DD')} </td>
<td style={{verticalAlign:"middle"}}> {moment(el.endingDate).format('YYYY-MM-DD')} </td> 
 {/* <td>{el.user.firstName}</td>  */}
 <td style={{verticalAlign:"middle"}}> <Editprogress progress={el.progression} id={el._id} isvalid={el.progValidation} handleload={handleload} load={load}/> </td>  
 <td style={{verticalAlign:"middle"}}> <Uservalid  isvalid={el.progValidation} /> </td> 


</tr> </tbody> ):null

}

</Table>
</Container> : <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>No Tasks for this project</h1>} 
        </div>
    )
}

export default Tasksuser

