import React, { useState } from 'react'
import{Link}from'react-router-dom';
import { Layout, Menu,Icon } from 'antd';
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import presentation from'../icons/presentation.svg'
import projects from'../icons/projects.svg'
import group from'../icons/group.svg'
import '../style/nav.css'
import icons8tâches from '../icons/icons8tâches.gif';
import logo from '../icons/logo.svg'
function Sidebar({id}) {
    const { Header, Sider, Content } = Layout;
   
    const[collapsed,setCollapsed]=useState(true)

   const toggle = () => {
    
        setCollapsed( !collapsed)
     
    };



    return (
        
            
        <Sider  collapsible collapsed={ collapsed} 
        
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
          backgroundColor:"#788287"
        }}
        >
          <div className="logo" > <div style={{display:"flex",justifyContent:"center",alignItems:"baseline"}}><img  id="back_img" src={logo}  alt="logo icon" style={{width:"60px",height:"60px",display:"inline"}}/>   </div> </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} id="menu_color">
            
            <Menu.Item key="1" icon={  <Link to='/dashuser'><img src={presentation} alt="dash"style={{width:"30px"}} /></Link>}>
             <Link to='/dashuser' className="lk_style"> Dashboard </Link>
            </Menu.Item>
           
           
            <Menu.Item key="2" icon={<Link to={`/projectuser/${id}`}> <img src={projects} alt="proj"style={{width:"30px"}} /></Link>}>
            <Link className="lk_style" to={`/projectuser/${id}`}> Projects</Link>  
            </Menu.Item>
           
            
            <Menu.Item key="3" icon={ <Link to={`/collaborators_user/${id}`}> < img src={group} alt="proj"style={{width:"30px"}}/></Link>}>
             <Link className="lk_style" to={`/collaborators_user/${id}`}> Collaborators</Link>
            </Menu.Item>
     
          </Menu>
        </Sider >
        
     
    )
}

export default Sidebar
