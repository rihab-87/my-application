import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import '../style/nav.css'
import Sidebar_user from '../pages/sidebar_user';
import Headbar_user from '../pages/Headbar_user';
import Project_user from '../pages/Project_user';
import { loaduser } from '../actions/useractions';
import { useDispatch, useSelector } from 'react-redux';

function Projview_user({match,history}) {
    const { Header, Sider, Content } = Layout;
    const dispatch = useDispatch()
    const au=localStorage.getItem('isAuth')
    useEffect(()=>{
        !au && history.push('/')
       dispatch(loaduser())
        },[au])
        
        const user=useSelector(state=>state.user.usercoll)



    return (
        <Layout>
<Sidebar_user id={match.params.id}/>
<Layout  className="site-layout">
<Headbar_user  history={history} id= {match.params.id}  user={user}/>
<Content className="site-layout-background"
            style={{
                margin: "24px 16px 0", overflow: "initial" 
            }}>
<Project_user match={match}/>
</Content>

</Layout>

</Layout> 
    )
}

export default Projview_user
