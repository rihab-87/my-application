import React from 'react'
import{Link}from'react-router-dom';
import { Layout} from 'antd';
import "antd/dist/antd.css";

import Avatar from '@material-ui/core/Avatar';

import '../style/nav.css'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authactions';

function Headbar_user({history,user}) {
  const { Header, Sider, Content } = Layout;
  const dispatch = useDispatch()

  const handlelogout=()=>{
 
    dispatch(logout())
    // setRedirect(true)
     history.push('/')
  }
  

  const au=localStorage.getItem('isAuth')



    return (
        <div>
            <Header>
            {/* <div style={{display:'flex',justifyContent:'space-around'}}>  */}
            <div>
        
            
            {/* <Link to='/'>Home</Link>
            <Link to='/dashuser'>dashborduser</Link>
            {/* <Link to='/register'>register</Link>
            <Link to='/login'>Login</Link> */}
            {/* <Link to={`/projectuser/${id}`}> My projects</Link> */}
            {/* <Link to={`/profile/${id}`}> Profile</Link>
            <Link  onClick={handlelogout}>Log out </Link>  */}

    
<div style={{display:"flex",justifyContent:"flex-end",alignItems:"baseline"}} >

            <div style={{display:"flex",alignItems:"center"}}>
            {au? 
<input  style={{ backgroundColor:"#10b335",border:"#10b335",marginTop:"15px"}} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  :
  <input  style={{ marginTop:"15px"}}   class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={false} />
  }
  
            <Link to={`/profile/${user._id}`} style={{textDecorationLine:"none",display:"flex",justifyContent:"center",alignItems:"baseline"}}> <Avatar src={user.avatar} style={{marginTop:"10px"}}/> <h6 className="link_style"> {user.firstName}</h6> </Link>
            </div>
            <Link  style={{textDecorationLine:"none"}} onClick={handlelogout}><h5 className="link_style" style={{textDecorationLine:"underline"}}> Log out</h5> </Link>
            {/* {redirect?<Redirect to='/'/>:null} */}




</div>

            </div> 
          </Header>
        </div>
    )
}

export default Headbar_user

