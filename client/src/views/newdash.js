import React from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
// import '../style/nav.css'
import Sidebar from '../pages/sidebar';
import Dashboard from '../pages/dashboard';
import Headbar from '../pages/Headbar';
import Sidebarbot from '../pages/sidebarbot';
import {Container} from'react-bootstrap'
function dashboard_admin() {
    const { Header, Sider, Content } = Layout;
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
<Sidebarbot/>
<Container style={{marginLeft:"100px"}} >
<Dashboard/>
</Container>
</div>

        
    )
}

export default dashboard_admin
