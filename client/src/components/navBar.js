import React, { useState } from 'react';
import{Link}from'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import '../style/nav.css'
function NavBar() {
    const { Header, Sider, Content } = Layout;
   
    const[collapsed,setCollapsed]=useState(false)

   const toggle = () => {
    
        setCollapsed( !collapsed)
     
    };
  
    return (
        
            <Layout>
        <Sider trigger={null} collapsible collapsed={ collapsed}>
          <div className="logo" > <h3>Project Management</h3> </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick:toggle,
            })}
            
            <Link to='/'>dashbord</Link>
            {/* <Link to='/register'>register</Link>
            <Link to='/login'>Login</Link> */}
            <Link to='/project'>projects</Link>

            <Link >Log out </Link>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          

          </Content>
        </Layout>
      </Layout>







     
    )
}

export default NavBar
