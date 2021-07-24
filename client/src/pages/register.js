
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { load_all_users, register } from '../actions/authactions';
import {Modal,Button,Form} from 'react-bootstrap'
import registercss from '../style/registercss.css'
import email from '../icons/email.svg'
import lock from '../icons/lock.svg'
import {Route,Redirect,Link} from 'react-router-dom'
import logo from '../icons/logo.svg'

function Register({history}) {
    const dispatch=useDispatch()

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
    firstName:'',
    lastName:'',
    profession:'',
    Skills:'',
    phone:'',
    linkedin:'',
    github:'',
    email:'',
    password:'',
    passwordConfirmation:'',
    isadmin:false,
   
});

const handelchange=(e)=>{
    setInfo({...info,[e.target.name]:e.target.value})

}

const handelregister=(e)=>{
 e.preventDefault(e)
 dispatch(register(info))
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
      <p style={{marginRight:"10px"}}>Already have an account? </p>
      <Link to='/login' id="link_style" > <Button id="log_style"> Login</Button></Link>
      </div>
      </div>
      </div>
        {/* <form onSubmit={handelregister} >
            <label> firstname</label>
            <input type='text' name="firstName" onChange={handelchange}/>
            <label> lastname</label>
            <input type='text' name="lastName" onChange={handelchange}/>
            <label> profession</label>
            <input type='text' name="profession" onChange={handelchange}/>
            <label> Skills</label>
            <input type='text' name="Skills" onChange={handelchange}/>
            <label> phone</label>
            <input type='text' name="phone" onChange={handelchange}/>
            <label> linkedin</label>
            <input type='text' name="linkedin" onChange={handelchange}/>
            <label> github</label>
            <input type='text' name="github" onChange={handelchange}/>
            <label> email</label>
            <input type='email' name="email" onChange={handelchange}/>
            <label> password</label>
            <input type='password' name="password" onChange={handelchange}/>

            <label> confirm your password</label>
            <input type='password' name="passwordConfirmation" onChange={handelchange}/>

            <button type ="submit">register</button>
           </form>  */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Form className="form_style" onSubmit={handelregister} >
        <h2 className="titl_style">SIGN UP!</h2> 
           <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your firstName" name="firstName" onChange={handelchange}/>
   
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your lasttName"  name="lastName" onChange={handelchange}/>
   
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your email"  name="email" onChange={handelchange}/>
   
  </Form.Group>


  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Profession</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your Profession"  name="profession" onChange={handelchange}/>
   
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Skills</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your Skills"  name="Skills" onChange={handelchange}/>
   
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Github</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your github"  name="github" onChange={handelchange}/>
  
  </Form.Group>
  
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>linkedin</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your linkedin"  name="linkedin" onChange={handelchange}/>
   
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicEmail">
    <Form.Label>Phone</Form.Label>
    <Form.Control className="input_style" type="text" placeholder="Enter your phone"  name="phone" onChange={handelchange}/>
  
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <div className="icon_style">
    <div className=" input_img_style"> <img src={lock} alt="emailicon" style={{width:"20px"}}/></div>
    <Form.Control  className="input_style"  type="password" placeholder="Password" name="password" onChange={handelchange}  required/>
    </div>
  </Form.Group>
  <Form.Group className="mb-3 group_style" controlId="formBasicPassword">
    <Form.Label>Password Confirmation</Form.Label>
    <div className="icon_style">
    <div className=" input_img_style"> <img src={lock} alt="emailicon" style={{width:"20px"}}/></div>
    <Form.Control  className="input_style"  type="password" placeholder=" confirm your Password" name="passwordConfirmation" onChange={handelchange}  required/>
    </div>
  </Form.Group>


<Button type="submit " className=" button_style" variant="primary"> Sign up</Button>

  </Form>
  </div>
        </div>
       
    )
}

export default Register
