import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import navBar from '../components/navBar'
import Login from './login'
import Register from './register'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Route,Redirect,Link} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap'
import home from '../style/home.css'
import logo from '../icons/logo.svg'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';

// import {
//     Form,
//     Input,
//     Button,
//     Radio,
//     Select,
//     Cascader,
//     DatePicker,
//     InputNumber,
//     TreeSelect,
//     Switch,
//   } from 'antd';


function Home({history}) {

    const auth=useSelector(state=>state.auth)
   const isAuth= localStorage.getItem('isAuth')
   console.log("isAuth",isAuth)
   const role= localStorage.getItem('role')
    console.log("role",role)
    useEffect(() => {
        
        if(auth.isAuth===true){
            if(auth.role===true)
           history.push('/dashboard')
         else {history.push('/dashuser')}
        }
        else { history.push('/')}
    }, [auth.isAuth,auth.role])
    
      
   

    return (
        <Container fluid>
    <Row style={{marginTop:"20px"}}>  
<Col>
<div style={{display:"flex",justifyContent:"center" , alignItems:"center", boxShadow:" 0 25px 75px rgb(16 30 54 / 25%)", width:"200px",backgroundColor:"transparent"}}>
 <img src={logo}   alt="logoicon" style={{ width:"60px",height:"60px",borderRadius:"50%"}}  /> 
 <h5>Project management </h5>
 </div>
</Col>

{/* <Col>
<h5>Home</h5>
</Col> */}
<Col>
<Row style={{display:"flex",justifyContent:"space-between",marginLeft:"170px"}}>
  <Col>
  <Link to='/login' id="link_style" >  <Button id="log_style"> Login</Button></Link>
  </Col>  
        
   <Col>
   <Link to='/register' id="link_style" > <Button id="log_style"> Sign up</Button></Link>
    </Col>
</Row>
</Col>
    </Row>
            
     <Row className="row-desc">
     
     <Col  style={{alignItems:"center",maxWidth:"550px", overflowWrap: "break-word",textAlign:"center",marginTop:"100px"}}>
     <Fade left>
     <h5 style={{marginLeft:"80px",fontWeight:"bolder"}}>
     This application brings your team together to plan, track, and collaborate on
      any project, and allows you as project manager  to ensure that the project is progressing 
      and  tasks are completed on time</h5>
<ul style={{marginLeft:"100px"}}>
    <li style={{fontWeight:"bolder"}}> Organize  and plan projects</li>
    <li style={{fontWeight:"bolder"}}> Collaborate with your team</li>
    <li style={{fontWeight:"bolder"}}> Track project and task  progress </li>
</ul>
</Fade>
     </Col> 
   
   
     <Col>
     <Fade right>
     <div><img style={{ width:"550px", height:"350px",float:"right", marginRight: "0px", marginTop: "100px",marginBottom: "100px" , opacity:"1"  }}      src="https://www.pngitem.com/pimgs/m/81-817574_what-is-a-project-management-process-banner-digital.png" alt="projectmangement" />
    </div>
    </Fade> 
     </Col>    
     
         
         
         </Row>      









        </Container>
    )
}

export default Home

