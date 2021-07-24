import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadproject, load_one_project } from '../actions/projectActions'
import Navbar_user from '../components/navbar_user'
import moment from 'moment'
import Tasksuser from '../components/tasksuser'
import{Link}from'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Table,Container} from 'react-bootstrap'
import userproject from "../style/userproject.css"
import check from '../icons/check.svg';
import update from '../icons/update.svg';
import icons8tâches from '../icons/icons8tâches.gif';
import project1 from'../icons/project1.svg'
import Collaborators from '../components/Collaborators'
import Projectsearch from'../components/projectsearch';
import Nbtask_user from'../components/nbtask_user'
import Prograte from '../components/prograte'
moment().format();

function Project_user({match}) {

    const dispatch = useDispatch()

    const[search,setSearch]=useState(false)
    
    useEffect(() => {
        dispatch(loadproject())

       
        }, [])
    
        const projects=useSelector(state=>state.project.projectdata)
        console.log("projects",projects)

        const projectuser=projects.filter((el)=>(el.user).includes(match.params.id))
        console.log(projectuser)
        const[searchproj,setSearchproj]=useState(projectuser)
        const handlesearch=(val)=>{
          setSearchproj(val)
          setSearch(true)
        
        }

const projectaffich=search?searchproj:projectuser



        const headtab=[ "Name","Description","Status","Starting Date","ending Date","Tasks","Collaborators","%Progress"]
    return (
        <div>
          <Projectsearch projectdata={projectuser} handlesearch={handlesearch}/>
         {/* <Navbar_user/> */}
         
     
        {projectaffich.length?
         <Container>
      <div className="title_icon"  style={{display:"flex",justifyContent:"center", alignItems:"center",marginBottom:"30px",fontStyle:"italic",textAlign:"center"}}>
      <p> <img src={project1 } alt="taches icon" style={{width:"50px",margin:"0px"}}/>
        <h1 style={{width:"300px",margin:"0px" }}> projects</h1> </p> </div>
         
        <Table responsive className="table-light table-hover tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" }}>
      
        <caption>My projects</caption>
<thead className= "headtask  " >

<tr  className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"16px"}}>
  <th style={{  verticalAlign:"middle",   fontFamily:  "'Roboto',  sans-serif " , fontSize:"18px", fontWeight:"bold",height:"70px"}}>Projects</th>
  {headtab.map((el, index) => (
    <th  style={{  verticalAlign:"middle", fontFamily:  "'Roboto',  sans-serif " , fontSize:"18px", fontWeight:"bold" ,textAlign:"center"}} key={index}>{el}</th>
  ))}
  {/* <th><img src={update} alt="setting icon"style={{width:"50px",cursor:"pointer" ,textAlign:"center"}} /></th> */}
</tr>
</thead>
{projectaffich.map((el,index)=>
        <tbody  className= "text-center" >
            <tr className="align-middle" style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"16px", fontWeight:"bold",textAlign:"center",height:"80px"}} >
            <td style={{verticalAlign:"middle"}}> {index}</td>
        <td  style={{verticalAlign:"middle"}}>   {el.projectName}   </td> 
           <td style={{verticalAlign:"middle"}}>  {el.projectDesc}  </td>
<td style={{verticalAlign:"middle"}}> {el.status}  </td>

<td style={{verticalAlign:"middle"}}> {moment(el.startingDate).format('YYYY-MM-DD')}</td>
<td style={{verticalAlign:"middle"}}>{moment(el.endingDate).format('YYYY-MM-DD')} </td> 
 {/* <td>{el.user.firstName}</td>  */}
 <td style={{verticalAlign:"middle"}}> 
  <Link to={`/tasksuser/${match.params.id}/${el._id}`}>
  <div  >  <Nbtask_user userid={match.params.id} projectid= {el._id}/> </div>
   </Link>  
 </td>

<td style={{verticalAlign:"middle"}}>
<Collaborators users={el.user}/>
 </td>
 <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Prograte taux= {el.progressproject}/></td>

       
</tr> </tbody> )
// :<h5>No Tasks for this project</h5>
}

</Table>
</Container>: <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>No Tasks for this project</h1>}
        </div>
      



          // { projectuser.map((el)=>
       
//        <div style={{display:"flex",justifyContent:"space-around"}}>
// <h5>{el.projectName}</h5>
// <h5>{el.projectDesc}</h5>
// <h5>{el.status}</h5>
// <h5> {moment(el.startingDate).format('DD/MM/YYYY')}</h5>
// <h5> {moment(el.startingDate).format('DD/MM/YYYY')}</h5>
// <Link to={`/taskuser/${match.params.id}`}>
//          <button>
//              tasks
//          </button>
//          </Link>  
         
      //  </div>)}  
      
    )
}

export default Project_user
