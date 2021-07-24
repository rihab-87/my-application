import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import '../style/nav.css'
import Sidebar from '../pages/sidebar';
import Sidebar_user from '../pages/sidebar_user';
import Tasks from '../pages/tasks';
import Headbar_user from '../pages/Headbar_user';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../actions/authactions';
import Dashboard_user from '../pages/dashboard_user';
import Dashboard from '../pages/dashboard';
import { loaduser } from '../actions/useractions';
function Dashview_user({history}) {
    const { Header, Sider, Content } = Layout;

    const dispatch= useDispatch()
    useEffect(()=>{
        !localStorage.getItem('isAuth')&& history.push('/')
          dispatch(loaduser())
        },[])

    const user=useSelector(state=>state.user.usercoll)
console.log(user)

    return (
        
        <Layout>
<Sidebar_user history={history} id={user._id}/>
<Layout  className="site-layout">
<Headbar_user history={history} user={user} />

<Content className="site-layout-background"
            style={{
                margin: "24px 16px 0", overflow: "initial" 
            }}>
<Dashboard_user id={user._id}/>
</Content>

</Layout>

</Layout>     
        
    )
}

export default Dashview_user

