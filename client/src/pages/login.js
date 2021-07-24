import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from'../actions/authactions'
import {Modal,Button,Form} from 'react-bootstrap'
import logincss from'../style/logincss.css'
import {Route,Redirect,Link} from 'react-router-dom'
import email from '../icons/email.svg'
import lock from '../icons/lock.svg'
import logo from '../icons/logo.svg'


function Login({history}) {
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
        // else { history.push('/')}
    }, [auth.isAuth,auth.role])
    
    const [info, setInfo] = useState({
        email:'',
        password:''
    })
const dispatch = useDispatch()
    const handelchange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
const handellogin=(e)=>{
    e.preventDefault()
    dispatch(login(info))
}



    return (

<div className="cont_style">
<div style={{display:"flex",justifyContent:"space-between"}}>

   
<div  className=" log_bloc" style={{display:"flex",justifyContent:"center" , alignItems:"center", boxShadow:" 0 25px 75px rgb(16 30 54 / 25%)", width:"200px",backgroundColor:"transparent"}}>
 <img src={logo}   alt="logoicon" style={{ width:"60px",height:"60px",borderRadius:"50%"}}  /> 
 <h5>Project management </h5>
 </div>

 <div style={{display:"flex",justifyContent:"space-between"}}>

<Link to='/' id="link_style">  <Button id="log_style">Home </Button></Link>

<div style={{display:"flex",justifyContent:"center" ,alignItems:"baseline"}} >
<p style={{marginRight:"10px"}}>Don't have an account? </p>
<Link to='/register' id="link_style" > <Button id="log_style"> Sign up</Button></Link>
</div>
</div>
</div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
 
   {/* <form onSubmit={handellogin}>
        <div>
            
            <label> email</label>
            <input type='email' name="email" onChange={handelchange}/>
            <label> password</label>
            <input type='password' name="password"onChange={handelchange}/> 
            <button type="submit">log in</button>
        </div>
        </form> */}

<Form onSubmit={handellogin} className="form_style_login">
 <h2 className="titl_style">Welcome back!</h2> 
  <Form.Group  className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <div className="icon_style">
   <div className=" input_img_style"> <img src={email} alt="emailicon" style={{width:"20px"}}/></div>
    <Form.Control className="input_style" type="email" placeholder={"Enter email" } name="email" onChange={handelchange} required/>
    </div>
   <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 group_style" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <div className="icon_style">
    <div className=" input_img_style"> <img src={lock} alt="emailicon" style={{width:"20px"}}/></div>
    <Form.Control  className="input_style"  type="password" placeholder="Password" name="password" onChange={handelchange}  required/>
    </div>
  </Form.Group>


  <Button  type="submit" className=" button_style" variant="primary" >
   Log in
  </Button>
</Form>


        
        


</div>
</div>
    )
}

export default Login
