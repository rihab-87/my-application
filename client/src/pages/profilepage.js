import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load, load_all_users } from '../actions/authactions'
import imgprofile from '../icons/imgprofile.jpg'
import Profile from '../components/profile'
import ADDcollab from'../components/addcollab'
import {Container,Row,Col,Button} from 'react-bootstrap'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Avatar from '@material-ui/core/Avatar';
import { loadproject } from '../actions/projectActions'
import { loadalltask } from '../actions/taskactions'
import Editprofile from '../components/editprofile';
import profilepage from'../style/profilepage.css'
import cv from '../icons/cv.svg'
import assortment from '../icons/assortment.svg'
import email from '../icons/email.svg'
import signegithub from'../icons/signegithub.svg'
import linkedin from'../icons/linkedin.svg'
import phone from'../icons/phone.svg'
import { loaduser } from '../actions/useractions'



function Profilepage() {

const dispatch=useDispatch()
const [update, setUpdate]=useState(false)
useEffect(()=>{
     dispatch(loaduser())
    // dispatch(loadproject())
    // dispatch(loadalltask())
},[update,dispatch])
 const user=useSelector(state=>state.user.usercoll)
// const projects=useSelector(state=>state.project.projectdata)
// const tasks=useSelector(state=>state.task.taskdata)
console.log(user)
const handleupdate=()=>{
    setUpdate(!update)
}

// const projnb=(id)=>{
//   return projects.filter((el)=>el.user.includes(id)).length
// //console.log("projnb",nb)
// }
// const tasknb=(id)=>{
//   return  tasks.filter((el)=>el.user===id).length
//   //console.log("tb",tb)
// }

// const upusers=users.map((el)=>el={...el,nbp:projnb(el._id),nbt:tasknb(el._id)})

// console.log("upusers",upusers)




    return (
        <div >  
            <h1 style={{textAlign:"center",marginBottom:"30px",fontStyle:"italic", margin:"auto"}}>Profile</h1>
          <Container  fluid  style={{width:"700px" ,marginTop:"50px",fontStyle:"italic", display:"flex",justifyContent:" center"}} >
     <Row className="cont_prof" >
      <Row  className="title_profile" >
      <Col style={{display:"flex",justifyContent:"center"}}> <Avatar src={user.avatar} style={{width:"120px",height:"120px"}} /></Col>   
      <Col  >
      <Row> <Col className="field_style" ><h5>First name:</h5></Col> <Col className="edit_style"> <Editprofile  id={user._id} el={user.firstName} name={"firstName"} handleupdate={handleupdate}/></Col> </Row>
      <Row >  <Col className="field_style"><h5>Last name:</h5></Col>  <Col className=" edit_style"><Editprofile  id={user._id} el={user.lastName} name={"lastName"} handleupdate={handleupdate}/></Col> </Row>
      </Col>   
          </Row>  
          <Row><h3 className="info_style">Info</h3></Row> 
     <Row className="row_style">  <Col className="field_style"> <img src={cv} alt="icon" style={{ width:"20px", textAlign:"center"}}/><h5>Profession:</h5></Col>  <Col className=" edit_style"> <Editprofile  id={user._id} el={user.profession} name={"profession"} handleupdate={handleupdate}/></Col></Row>
     <Row className="row_style"><Col className="field_style"> <img src={assortment} alt="icon" style={{ width:"20px",textAlign:"center"}}/><h5>Skills:</h5></Col>  <Col className=" edit_style"> <Editprofile  id={user._id} el={user.Skills} name={"Skills"} handleupdate={handleupdate}/></Col> </Row>
     <Row className="row_style"> <Col className="field_style"> <img src={email} alt="icon" style={{ width:"20px",textAlign:"center"}}/><h5>Email:</h5> </Col> <Col className=" edit_style"><Editprofile id={user._id} el={user.email} name={"email"} handleupdate={handleupdate}/></Col></Row>
     <Row className="row_style"><Col className="field_style"> <img src={signegithub} alt="icon" style={{ width:"20px",textAlign:"center"}}/><h5>Github:</h5></Col> <Col className=" edit_style"> <Editprofile id={user._id} el={user.github} name={"github"} handleupdate={handleupdate}/></Col></Row>
     <Row className="row_style"> <Col className="field_style"> <img src={linkedin} alt="icon" style={{ width:"20px",textAlign:"center"}}/><h5>Linkedin:</h5> </Col> <Col className=" edit_style"><Editprofile  id={user._id} el={user.linkedin} name={"linkedin"} handleupdate={handleupdate}/></Col> </Row>
     <Row className="row_style">  <Col className="field_style"> <img src={phone} alt="icon" style={{ width:"20px",textAlign:"center"}}/><h5>Phone:</h5> </Col> <Col className=" edit_style"><Editprofile id={user._id} el={user.phone} name={"phone"} handleupdate={handleupdate}/></Col></Row>
    </Row> 

          </Container> 
        </div>
    )
}

export default Profilepage
