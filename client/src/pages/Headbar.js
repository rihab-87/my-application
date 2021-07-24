import React, { useState } from 'react'
import{Link,Redirect}from'react-router-dom';
import { Layout,Badge} from 'antd';
import "antd/dist/antd.css";
import Avatar from '@material-ui/core/Avatar';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import '../style/nav.css'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authactions';
import{Form,ToggleButton} from'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

function Headbar({history,user}) 
{


  const { Header, Sider, Content } = Layout;
  const dispatch = useDispatch()
  const[redirect , setRedirect]=useState(false)
const handlelogout=()=>{
 
  dispatch(logout())
  // setRedirect(true)
   history.push('/')
}

const au=localStorage.getItem('isAuth')

    return (
        <div>
            <Header >
            <div > 
        
            {/* <Link to='/'>Home</Link>
            <Link to='/dashboard'>dashboard</Link>
            <Link to='/project'>projects</Link> */}
            
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"baseline"}} >

            <div style={{display:"flex",alignItems:"center"}}>
            {au? 
<input  style={{ backgroundColor:"#10b335",border:"#10b335",marginTop:"15px"}} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  :
  <input  style={{ marginTop:"15px"}}   class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={false} />
  }
  
            <Link to='/profile' style={{textDecorationLine:"none",display:"flex",justifyContent:"center",alignItems:"baseline"}}>  <Avatar src={user.avatar} style={{marginTop:"10px"}}/>  <h6 className="link_style"> {user.firstName}</h6> </Link>
            </div>
            <Link  style={{textDecorationLine:"none"}} onClick={handlelogout}><h5 className="link_style" style={{textDecorationLine:"underline"}}> Log out</h5> </Link>
            {/* {redirect?<Redirect to='/'/>:null} */}








            </div>
            </div> 
          </Header>
        </div>
    )
}

export default Headbar
