import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import '../style/nav.css'
import Sidebar_user from '../pages/sidebar_user';
import Headbar_user from '../pages/Headbar_user';
import Tasksuser from '../components/tasksuser'
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from '../actions/useractions';
function Taskview_user({match,history}) {
    const { Header, Sider, Content } = Layout;

    const dispatch= useDispatch()
    useEffect(()=>{
        !localStorage.getItem('isAuth')&& history.push('/')
        dispatch(loaduser())
        },[])
        
        const user=useSelector(state=>state.user.usercoll)



    return (
        <Layout>
        <Sidebar_user id={match.params.userid}/>
        <Layout  className="site-layout">
        <Headbar_user  history={history} id={match.params.userid} user={user}/>
        <Content className="site-layout-background"
                    style={{
                        margin: "24px 16px 0", overflow: "initial" 
                    }}>
        <Tasksuser match={match}/>
        </Content>
        
        </Layout>
        
        </Layout>
    )
}

export default Taskview_user
