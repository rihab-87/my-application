import React, { useEffect } from 'react'

  import{DropdownButton,Dropdown,ButtonGroup} from'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { useDispatch, useSelector } from 'react-redux'
import { load_all_users } from '../actions/authactions';
import collaborators from'../style/collaborators.css'

// import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
// import { DownOutlined, UserOutlined } from '@ant-design/icons';

function Collaborators({users}) {
    const dispatch=useDispatch()
   

    useEffect(() => {
        dispatch(load_all_users())
        
        }, [dispatch])
        const userdata=useSelector(state=>state.auth.userdata)
  
        
 const collab=userdata.length?userdata.filter((el)=>(users).includes(el._id)===true):null
// console.log(userdata)


    
    return (
        <div>  

      <DropdownButton
        as={ButtonGroup }
        // key={direction}
        //  id={`dropdown-button-drop-${direction}`}
        id="btn_style"
         drop={'up'}
        variant="light"
        title={` collaborators `}
        style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"14px", fontWeight:"bold",textAlign:"center"}}
        
      > 


     


    <div style={{  maxHeight:"80vh",overflowX:"auto",
  overflowY: "scroll",zIndex:"10",border:"2px solid dark"}}>
  {collab?collab.map((e, key) => {
        return <Dropdown.Item key={key}   value={e._id} style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"14px", fontWeight:"bold",textAlign:"center"}}>{e.firstName}</Dropdown.Item>;
    }):null} 


</div>








        {/* <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
    </DropdownButton>   
        </div>
    )
}

export default Collaborators
