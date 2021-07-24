import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../components/navBar'
import {editproject, loadproject,addproject }from'../actions/projectActions'
import Edit from '../components/Edit'
import Delete from '../components/Delete'
import Add from '../components/Add'
import{Link}from'react-router-dom'
// import Editstatus_ad from '../components/Editstatus_ad'
import Editstatus from '../components/Editstatus'
import Collaborators from '../components/Collaborators'
import Addmembers from '../components/Addmembers'
import Add_project_memb from '../components/Add_project_memb'
import { Col, Container, Row ,Table,Button,Badge} from 'react-bootstrap'
import Editdate from '../components/editdate'
import Projects from '../style/projects.css'
import Projectprogress from '../components/Projectprogress'
import Prograte from'../components/prograte';
import Projectsearch from '../components/projectsearch'
import Proj_collab_search from'../components/proj_collab_search'
import Nbtask from'../components/nbtask'
import { loadalltask } from '../actions/taskactions'
function Project() {
   
    const[load,setLoad]=useState(true)
    const dispatch = useDispatch()
    const projectdata=useSelector(state=>state.project.projectdata)

    const[search,setSearch]=useState(false)
    const[searchproj,setSearchproj]=useState(projectdata)

useEffect(() => {
 
setTimeout(() => {
    dispatch(loadproject())
   
  }, 1000);
}, [load,dispatch])




console.log("projectdata",projectdata)
// const [newprojectuser, setNewprojectuser ]=useState({project:projectdata.user})
const handleload=(val)=>{
setLoad(!val)
}
//callback function to projectsearch
const handlesearch=(val)=>{
  setSearchproj(val)
  setSearch(true)

}

//filter les projets selon leur status
if(search){
var doneprojects=searchproj.length?searchproj.filter((el)=>el.status==="Done"):null
var undoneprojects=searchproj.length?searchproj.filter((el)=>el.status==="Undone"):null
var progprojects=searchproj.length?searchproj.filter((el)=>el.status==="In progress"):null

}
else{
 doneprojects=projectdata.length?projectdata.filter((el)=>el.status==="Done"):null
 undoneprojects=projectdata.length?projectdata.filter((el)=>el.status==="Undone"):null
 progprojects=projectdata.length?projectdata.filter((el)=>el.status==="In progress"):null
}



  const headtab=[ "Name","Description","Status","Starting Date","ending Date","Tasks","Collaborators","% progress"]
    return (
        <div> 
          {/* <NavBar/>  */}
          <Projectsearch projectdata={projectdata} handlesearch={handlesearch}/>
          <Add/>
          {/* <Proj_collab_search projectdata={projectdata} handlesearch={handlesearch}/> */}
        <h3 style={{color:"#f5f6f8" }}>projects</h3>
      {doneprojects?
        <Container>
          <div className="title_icon" style={{display:"flex",justifyContent:"start", alignItems:"center",marginBottom:"10px"}}>
            <img src="check.svg" alt="done icon" style={{width:"30px"}}/>
            <h3 style={{width:"300px",margin:"0px" }}> Done projects</h3></div>
        
        <Table responsive className="table-light table-hover tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" }}>
        <caption>Done Projects</caption>
  <thead className= "head" >
    <tr  className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px" , fontWeight:"bold"}}>
      <th >Done Projects</th>
      {headtab.map((el, index) => (
        <th style={{verticalAlign:"middle" ,paddingLeft:"20px"}} key={index}>{el}</th>
      ))}
     {/* <th > Collaborators  <Proj_collab_search projectdata={projectdata} handlesearch={handlesearch}/></th> */}
     
      <th  style={{verticalAlign:"middle" ,paddingLeft:"20px"}} ><img src="update.svg" alt="setting icon"style={{width:"30px",cursor:"pointer" ,textAlign:"center"}} /></th>
    </tr>
  </thead>
  <tbody  className= "text-center" >
   
    {(doneprojects)?doneprojects.map((el,index)=>
       <tr className="align-middle" style={{  verticalAlign:"middle", fontFamily:  "'Roboto',  sans-serif " , fontSize:"16px", fontWeight:"bold"}}>
      
          
          <td style={{verticalAlign:"middle",paddingLeft:"20px"}}> {index}</td>
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  <Edit el={el.projectName} id= {el._id} name={"projectName"}  choice="project"/>   </td> 
           <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Edit el={el.projectDesc}  id= {el._id}  name={"projectDesc"}  choice="project"/>  </td>    
           <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Editstatus id={el._id} el={el.status} prog={el.progressproject} choice={'project'} /> </td> 
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px" }}> <Editdate id={el._id} start={el.startingDate} datechoice={'start'} choice={'project'}/> </td>
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px"}} > <Editdate id={el._id} end={el.endingDate} datechoice={'end'}  choice={'project'}/> </td> 
          
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  <Link to={`/task/${el._id}`}>
           
           <div   > <Nbtask id={el._id} choice={"done"} /></div>
        </Link>  </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} >  <Collaborators users={el.user} id={el._id}/>   </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Prograte taux= {el.progressproject}/></td>
       
       
        {/* <td><Projectprogress  key={index} id={el._id} prog={el.progressproject} handleload={handleload} load={load}/></td>     */}
{/* <Addmembers newprojectuser={el.user} projectid= {el._id} choice={"edit_project"} handleload={handleload} load={load}/> */}
<td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <Add_project_memb projectusers= {el.user}   projectid= {el._id} handleload={handleload} load={load}/> 
            
<Delete id={el._id}  choice={'project'}/></td>       
          
            </tr> ):null}   
          </tbody>
 
      </Table> 
      </Container>:null}
      { undoneprojects? <Container>
          <div className="title_icon" style={{display:"flex",justifyContent:"start", alignItems:"center",marginBottom:"10px"}}>
            <img src="file.svg" alt="done icon" style={{width:"30px"}}/>
            <h3 style={{width:"300px",margin:"0px" }}> Undone projects</h3></div>
        
        <Table responsive className="table-light table-hover  tab-shadow   table-sm" style={{backgroundColor:"#f5f6f8" }}>
        <caption>Undone Projects</caption>
  <thead className= "headun  " >
    <tr className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px" , fontWeight:"bold" }}>
      <th>Undone Projects</th>
      {headtab.map((el, index) => (
        <th  style={{verticalAlign:"middle",paddingLeft:"20px"}} key={index}>{el}</th>
      ))}
      {/* <th > Collaborators  <Proj_collab_search projectdata={projectdata} handlesearch={handlesearch}/></th> */}
      <th  style={{verticalAlign:"middle" ,paddingLeft:"20px"}} ><img src="update.svg" alt="setting icon"style={{width:"30px",cursor:"pointer" ,textAlign:"center"}} /></th>
    </tr>
  </thead>
  <tbody  className= "text-center" >
   
    {(undoneprojects)?undoneprojects.map((el,index)=>
       <tr className="align-middle" style={{  verticalAlign:"middle" , fontFamily:  "'Roboto',  sans-serif " , fontSize:"16px", fontWeight:"bold" ,textAlign:"center"}}>
      
          
              <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> {index}</td>
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>    <Edit el={el.projectName} id= {el._id} name={"projectName"}  choice="project"/>   </td> 
           <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>    <Edit el={el.projectDesc}  id= {el._id}  name={"projectDesc"}  choice="project"/>  </td>  
          
           <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Editstatus id={el._id} el={el.status} choice={'project'}  prog={el.progressproject}/> </td> 
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px"}}> <Editdate id={el._id} start={el.startingDate} datechoice={'start'} choice={'project'}/> </td>
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px"}}> <Editdate id={el._id} end={el.endingDate} datechoice={'end'}  choice={'project'}/> </td> 
          
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  
          <Link  to={`/task/${el._id}`}>
            <div  >  <Nbtask id={el._id} choice={"undone"}/> </div>
          
        </Link>  </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} >  <Collaborators users={el.user} id={el._id}/>   </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Prograte taux= {el.progressproject}/></td>
       
        
          {/* <td><Projectprogress  key={index} id={el._id} prog={el.progressproject} handleload={handleload} load={load}/></td>   */}
{/* <Addmembers newprojectuser={el.user} projectid= {el._id} choice={"edit_project"} handleload={handleload} load={load}/> */}
<td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <Add_project_memb projectusers= {el.user}   projectid= {el._id} handleload={handleload} load={load}/> 
            
<Delete id={el._id}  choice={'project'}/></td>       
          
            </tr> ):null}   
          </tbody>
 
      </Table> 
      </Container>:null}


{progprojects? <Container>
          <div className="title_icon" style={{display:"flex",justifyContent:"start", alignItems:"center",marginBottom:"10px"}}>
            <img src="rising.svg" alt="done icon" style={{width:"30px"}}/>
            <h3 style={{width:"300px",margin:"0px" }}> In progresse projects</h3></div>
        
        <Table responsive className="table-light table-hover  tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" }}>
        <caption>In progresse Projects</caption>
  <thead className= "headpro  " >
    <tr className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"16px" , fontWeight:"bold"}} >
      <th>IN progress Projects</th>
      {headtab.map((el, index) => (
        <th  style={{verticalAlign:"middle",paddingLeft:"20px"}} key={index}>{el}</th>
      ))}
      {/* <th>Progress %</th> */}
      {/* <th > Collaborators  <Proj_collab_search projectdata={projectdata} handlesearch={handlesearch}/></th> */}
      <th  style={{verticalAlign:"middle" ,paddingLeft:"20px"}} ><img src="update.svg" alt="setting icon"style={{width:"30px",cursor:"pointer" ,textAlign:"center"}} /></th>
    </tr>
  </thead>
  <tbody  className= "text-center" >
   
    {(progprojects)?progprojects.map((el,index)=>
       <tr className="align-middle" style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>
      
          
              <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> {index}</td>
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Edit  key={index} el={el.projectName} id= {el._id} name={"projectName"}  choice="project"/>   </td> 
           <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Edit  key={index} el={el.projectDesc}  id= {el._id}  name={"projectDesc"}  choice="project"/>  </td>  
          
           <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Editstatus  key={index} id={el._id} el={el.status} choice={'project'} prog={el.progressproject}/> </td> 
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px"}}> <Editdate key={index}  id={el._id} start={el.startingDate} datechoice={'start'} choice={'project'}/> </td>
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px" ,width:"110px"}}> <Editdate key={index}  id={el._id} end={el.endingDate} datechoice={'end'}  choice={'project'}/> </td> 
          
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  <Link  key={index}  to={`/task/${el._id}`}>
          
           <div > <Nbtask id={el._id} choice={"in progress"} /> </div>
             
           
        </Link>  </td>
        <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  <Collaborators        key={index}  users={el.user} id={el._id}/>   </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <Prograte taux= {el.progressproject}/></td>
        
      
           {/* <td><Projectprogress  key={index} id={el._id} prog={el.progressproject}/></td>     */}

{/* <Addmembers newprojectuser={el.user} projectid= {el._id} choice={"edit_project"} handleload={handleload} load={load}/> */}
<td  style={{verticalAlign:"middle",paddingLeft:"20px" }} > <Add_project_memb  key={index} projectusers= {el.user}   projectid= {el._id} handleload={handleload} load={load}/> 
            
<Delete id={el._id}  choice={'project'}/></td>       
          
            </tr> ):null}   
          </tbody>
 
      </Table> 
      </Container>:null}







    




{/* <Row>
<div style={{display:"flex",justifyContent:"space-around"}} >
    <Col lg={true} xs={3}><h5>Name</h5></Col>
    <Col lg={true} xs={3}><h5>Description</h5></Col>
    <Col lg={true}><h5>Status</h5></Col>
    <Col lg={true}><h5>Starting date</h5></Col>
    <Col lg={true}><h5>Ending date</h5></Col>
    <Col lg={true}><h5>tasks</h5></Col>
    <Col lg={true}><h5>Collaborators</h5></Col>
    <Col lg={true}><h5>Delete</h5></Col>
    </div>
</Row> */}


        {/* {(projectdata)?projectdata.map((el)=>
       
        <Row>
            <div style={{display:"flex",justifyContent:"space-around"}} >
              
           <Col lg={true} xs={3}>    <Edit el={el.projectName} id= {el._id} name={"projectName"}  choice="project"/>   </Col> 
            <Col lg={true}  lg={3}>    <Edit el={el.projectDesc}  id= {el._id}  name={"projectDesc"}  choice="project"/>  </Col>  
           
            <Col lg={true}> <Editstatus id={el._id} el={el.status} choice={'project'}/> </Col> 
           <Col lg={true}> <Editdate id={el._id} start={el.startingDate} datechoice={'start'} choice={'project'}/> </Col>
           <Col lg={true}> <Editdate id={el._id} end={el.endingDate} datechoice={'end'}  choice={'project'}/> </Col> 
           
           <Col lg={true}>  <Link to={`/task/${el._id}`}>
             tasks
         </Link>  </Col>
         <Col lg={true} >  <Collaborators users={el.user} id={el._id}/>   </Col>
 
{/* <Addmembers newprojectuser={el.user} projectid= {el._id} choice={"edit_project"} handleload={handleload} load={load}/> */}
{/* <Col lg={true}style={{display:"flex",justifyContent:"space-around"}} > <Add_project_memb projectusers= {el.user}   projectid= {el._id} handleload={handleload} load={load}/> 
             
 <Delete id={el._id}  choice={'project'}/></Col>       
             </div>
             </Row>
        ):null  }</Table> </Container> */} 
     </div> 
        
    )

        }
export default Project
