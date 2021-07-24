import React, { useEffect, useState } from 'react'
import Project from './project'
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

import '../style/nav.css';
import Sidebar from '../pages/sidebar';
import Headbar from '../pages/Headbar'
import { useDispatch, useSelector } from 'react-redux';
import { load, logout } from '../actions/authactions';
import { loaduser } from '../actions/useractions';

function Navproject({history}) {
  const dispatch = useDispatch()
    const { Header, Sider, Content } = Layout;
    const au=localStorage.getItem('isAuth')
    const[collapsed,setCollapsed]=useState(true)
    useEffect(()=>{
      !au && history.push('/')
     dispatch(loaduser())
      },[au])
      
      const user=useSelector(state=>state.user.usercoll)
      console.log("useradmin",user)
   const toggle = () => {
    
        setCollapsed( !collapsed)
     
    };
    

    return (
        <Layout>
     <Sidebar/>
        <Layout className="site-layout">
         <Headbar history={history} user={user}/>
          <Content
            className="site-layout-background"
            style={{
                margin: "24px 16px 0", overflow: "initial" 
            }}
          >
            
          <Project/>
       
          </Content>
        </Layout>
      </Layout>

    )
}

export default Navproject
