import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadalltask, loadtask } from '../actions/taskactions'
import Addmembers from '../components/Addmembers'
import Addtasks from '../components/Addtasks'
import Add_task_memb from '../components/Add_task_memb'
import Delete from '../components/Delete'
import Edit from '../components/Edit'
import Editstatus from '../components/Editstatus'
import NavBar from '../components/navBar'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Table,Container, Form } from 'react-bootstrap'
import tasks from'../style/tasks.css'
import Editdate from '../components/editdate'
import check from '../icons/check.svg';
import update from '../icons/update.svg';
import icons8tâches from '../icons/icons8tâches.gif';
import ProgressValid from'../components/progressValid'
import Delettask from '../components/delettask';
import Projectprogress from '../components/Projectprogress'
import Searchtask from'../components/searchtask'
function Tasks({match}) {
  const dispatch = useDispatch()
  const[load,setLoad]=useState()
  const[search,setSearch]=useState(false)
  
useEffect(() => {
  setTimeout(() => {
     dispatch(loadtask(match.params.id))
    // dispatch(loadalltask())
  }, 1000);
  // dispatch(loadtask(match.params.id))
},[load,dispatch])
const t=useSelector(state=>state.task.taskdata)
// console.log(t)
var alltask=t?t.filter((el)=>el.project._id===match.params.id):null

const[searchtask,setSearchtask]=useState(alltask)

const handleload=(val)=>{
  setLoad(!val)
  }

  const handlesearch=(val)=>{
    setSearchtask(val)
    setSearch(true)
  
  }

const taskaffiche= search?searchtask:alltask





  const nameproj= alltask? alltask.find((el)=>el.project._id===match.params.id):null
  const headtab=[ "Name","Description","Status","Starting Date","ending Date", "progression","Collaborator"]
    return (
        <div>
        <Searchtask alltask={alltask} handlesearch={handlesearch}/>
        
       <h3 style={{textAlign:"center",marginBottom:"30px",fontStyle:"italic", margin:"auto"}}> {nameproj?nameproj.project.projectName:null}</h3> 
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
        <Addtasks id={match.params.id} handleload={handleload} load={load}/>
        <Projectprogress projectid={match.params.id} tasks={alltask} /> 
        </div>

        {taskaffiche.length?
         <Container>
        {/* <div className="title_icon"  style={{display:"flex",justifyContent:"start", alignItems:"center",marginBottom:"10px"}}>
        <img src={icons8tâches } alt="taches icon" style={{width:"30px",margin:"0px"}}/>
        <h3 style={{width:"300px",margin:"0px" }}> Tasks</h3>
        </div> */}
    
    <Table responsive className="table-light table-hover tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" }}>
    <caption>Tasks</caption>
<thead className= "headtask  " >
<tr  className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px" , fontWeight:"bold"}}>
  <th  style={{verticalAlign:"middle"}} >Tasks</th>
  {headtab.map((el, index) => (
    <th style={{verticalAlign:"middle"}}  key={index}>{el}</th>
  ))}
  <th><img src={update} alt="setting icon"style={{width:"50px",cursor:"pointer" ,textAlign:"center"}} /></th>
</tr>
</thead>

        
        {taskaffiche.map((el,index)=>
        <tbody  className= "text-center" >
            <tr className="align-middle" style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"16px", fontWeight:"bold"}}>
            <td style={{verticalAlign:"middle"}}> {index}</td>
        <td style={{verticalAlign:"middle"}}>    <Edit el={el.taskName} id= {el._id} name={"taskName"}  choice="task"/>   </td> 
           <td style={{verticalAlign:"middle"}}>    <Edit el={el.taskDesc}  id= {el._id}  name={"taskDesc"}  choice="task"/>  </td>
<td style={{verticalAlign:"middle"}}><Editstatus id= {el._id} el= {el.status} choice={'task'}  progress= {el.progression } handleload={handleload} load={load}/> </td>

<td style={{verticalAlign:"middle"}} > <Editdate id={el._id} start={el.startingDate} datechoice={'start'} choice={'task'}/> </td>
<td  style={{verticalAlign:"middle"}}> <Editdate id={el._id} end={el.endingDate} datechoice={'end'}  choice={'task'}/> </td>  
  <td style={{verticalAlign:"middle"}}> <ProgressValid   status={el.status} progress= {el.progression }  isvalid={el.progValidation} id= {el._id}/></td> 
  <td style={{verticalAlign:"middle"}}>{el.user.firstName}</td> 
<td style={{verticalAlign:"middle"}}><Delettask id={el._id} choice={'task'}/>
 <Add_task_memb taskid={el._id} projectusers={el.project.user} taskuser={[el.user._id]} handleload={handleload} load={load}/> 
 </td>
 {/* <Addmembers choice={'task'} newprojectuser={[el.user._id]} taskid={el._id}  handleload={handleload} projectusers={el.project.user} load={load}/>  */}

       
</tr> </tbody> )
// :<h5>No Tasks for this project</h5>
}

</Table>
{/* <Projectprogress projectid={match.params.id} tasks={alltask} /> */}
</Container>: <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>No Tasks for this project</h1>}
        </div>
    )
}
export default Tasks
