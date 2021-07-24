import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import '../style/nav.css'

import Sidebar_user from '../pages/sidebar_user';

import Headbar_user from '../pages/Headbar_user';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../actions/authactions';
import Dashboard_user from '../pages/dashboard_user';
import Profilepage from'../pages/profilepage'
import { loaduser } from '../actions/useractions';

function Profileview_user({match,history}) {
    const { Header, Sider, Content } = Layout;

    const dispatch= useDispatch()
    useEffect(()=>{
        !localStorage.getItem('isAuth')&& history.push('/')
        dispatch(loaduser())
        },[])
        
        const user=useSelector(state=>state.user.usercoll)
 

    return (
        
        <Layout>
<Sidebar_user id={match.params.id}/>
<Layout  className="site-layout">
<Headbar_user history={history} id={match.params.id}  user={user}/>
<Content className="site-layout-background"
            style={{
                margin: "24px 16px 0", overflow: "initial" 
            }}>
<Profilepage user={user}/>
</Content>

</Layout>

</Layout>     
        
    )
}

export default Profileview_user

