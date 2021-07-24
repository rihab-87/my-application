import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
// import '../style/nav.css'
import Sidebar from '../pages/sidebar';
import Dashboard from '../pages/dashboard';
import Headbar from '../pages/Headbar';
import { load } from '../actions/authactions';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from '../actions/useractions';

function Dashboard_admin({history}) {
    const { Header, Sider, Content } = Layout;
    const dispatch= useDispatch()
    useEffect(()=>{
        !localStorage.getItem('isAuth')&& history.push('/')
          dispatch(loaduser())
        },[])
        

         const user=useSelector(state=>state.user.usercoll)
        console.log("useradmin",user)
    //   const user= JSON.parse(localStorage.getItem('user'))
    //    console.log(user)
    return (
<Layout>
<Sidebar/>
<Layout  
 className="site-layout"
>
<Headbar history={history} 
  user={user}
/>
<Content style={{height:"100vh"}}
className="site-layout-background"
            style={{
                margin: "24px 16px 0" ,overflow:"initial"
            }}>

<Dashboard/>

</Content>

</Layout>

</Layout> 
        
    )
}

export default Dashboard_admin
