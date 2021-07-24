import React, { useEffect } from 'react'
import { Layout } from 'antd';
import "antd/dist/antd.css";
import '../style/nav.css'
import Sidebar from '../pages/sidebar';
import Collabpage from '../pages/collabpage';
import Headbar from '../pages/Headbar';
import { loaduser } from '../actions/useractions';
import { useDispatch, useSelector } from 'react-redux';
function Collabview({history}) {
    const { Header, Sider, Content } = Layout;
const dispatch=useDispatch()
useEffect(()=>{
!localStorage.getItem('isAuth')&& history.push('/')
dispatch(loaduser())

},[])
const user=useSelector(state=>state.user.usercoll)
console.log("useradmin",user)



    return (
<Layout>
<Sidebar/>
<Layout  className="site-layout">
<Headbar history={history} user={user}/>
<Content className="site-layout-background"
            style={{
                margin: "24px 16px 0", overflow: "initial" 
            }}>
<Collabpage/>
</Content>

</Layout>

</Layout>           
        
    )
}

export default Collabview

