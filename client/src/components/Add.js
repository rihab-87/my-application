import React, { useEffect, useState } from 'react'
// import {Button,Modal} from'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {addproject} from '../actions/projectActions'
import Addmembers from './Addmembers';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import moment from 'moment';
import { Option } from 'antd/lib/mentions';
import addnew from'../icons/addnew.svg'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import projects from'../style/projects.css'
import {List,ListGroup} from 'react-bootstrap'

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Modal,Collapse
} from 'antd';
import { load_all_users } from '../actions/authactions';


function Add() {
  moment().format();
  const dateFormat = "YYYY-MM-DD";
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { TextArea } = Input;
  const { Panel } = Collapse;
    const [newproject, setNewproject] = useState({
        projectName:'',
        projectDesc:'',
        startingDate:'',
        endingDate:'',
        status:'',
        progressproject:0,
          user:[]

    })
    const [newprojectuser, setNewprojectuser] = useState([])
    const dispatch = useDispatch()
const [show, setShow] = useState(false);
const [showl, setShowl] = useState(false);
useEffect(() => {
 dispatch(load_all_users())
}, [dispatch])


const users=useSelector(state=>state.auth.userdata)



 const handleClose = () => {setShow(false);setShowl(false) }
const handleShow = (e) => {e.preventDefault()
  setNewproject({...newproject,user:[] })
  setNewprojectuser([])
 
     setShow(true)
     setShowl(true)};
     
 const handlechange=(e)=>{
     e.preventDefault()
setNewproject({...newproject,[e.target.name]:e.target.value})

 }
 const  handlechangesd=(date,dateString,e)=>{
  const dates=moment(date).format("YYYY/MM/DD")
  console.log(date)
  setNewproject({...newproject,startingDate:dateString}) 
}

const  handlechanged=(date,dateString,e)=>{
 const datee=moment(date).format("YYYY/MM/DD")
 console.log(datee)
 if(dateString){
 setNewproject({...newproject,endingDate:dateString})}
 else{setNewproject({...newproject,endingDate:""})}
}
const handleselect=(e)=>{
  console.log(e)
  setNewproject({...newproject,status:e,progressproject:(e==="Done")?100:0})}

const onStep=(value)=>{
  console.log(value)
  setNewproject({...newproject,progressproject:newproject.progressproject=value})
}

 const handeluser=(projectuser)=>{
  setNewprojectuser(projectuser)
  }
//  const newadd=newprojectuser.filter((el)=> (newproject.user).includes(el)===false)
//  const userup=(newproject.user).concat(newadd)
//    console.log(userup)
const userselect=users?users.filter((el)=>newprojectuser.includes(el._id)):null

const handlesave=()=>{
  setShow(false);
  dispatch(addproject(newproject))
  setNewproject({
    projectName:'',
    projectDesc:'',
    startingDate:'',
    endingDate:'',
    status:'',
    progressproject:0,
      user:[]
  })
  setNewprojectuser([])
  handleClose()
   
}
const handelconfirm=(e)=>{
  e.preventDefault()
  console.log(newprojectuser)
   setNewproject({...newproject,user:newproject.user=newprojectuser})
  console.log(newproject.user)
 

}





const date=moment().format('DD/MM/YYYY')
return (
      <>
   <Button type="default" shape="round"   onClick={handleShow } style={{display:"flex",justifyContent:"center", alignItems:"center", width:"250px" , height:"50px",backgroundColor:"#f8f9fa", boxShadow: "0px 1px 10px 1px",marginLeft:"50px"}}>
      <img src={addnew} alt="addicon" style={{width:"40px",cursor:"pointer"}}/><h5 style={{margin:"0px"}}>Create new project</h5> 
     
      
      </Button>

      <Modal title="Create new project" visible={show} onOk={handlesave} onCancel={handleClose}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
       
        <Form.Item label="Project name" style={{overflow:"visible"}}>
        <Input style={{marginLeft:"50px"}} type="text" name="projectName" onChange={handlechange} value={newproject.projectName}/>
        </Form.Item>
        <Form.Item label="Project description" style={{overflow:"visible"}}>
        <TextArea style={{marginLeft:"50px"}}  type="text" name="projectDesc" onChange={handlechange} autoSize value={newproject.projectDesc}/>
        </Form.Item>
        <Form.Item label="Project status" style={{overflow:"visible"}}>
          <Select style={{marginLeft:"50px"}}  value={newproject.status} onSelect={handleselect}>
            <Option  value="Done">Done</Option>
            <Option value="Undone">Undone</Option>
            <Option value="In progress">In progress</Option>
          </Select>
          {(newproject.status)==="In progress"? <Form.Item label="progress %"><InputNumber  min={0} max={100} defaultValue={0} step={10} onStep={onStep} /> </Form.Item>:null}
        </Form.Item>
        <Form.Item label="starting Date" style={{overflow:"visible"}}>
          <DatePicker style= {{marginLeft:"50px"}} name="startingDate" onChange={handlechangesd}/>
        </Form.Item>
        <Form.Item label="endinging Date" style={{overflow:"visible"}}>
          <DatePicker style= {{marginLeft:"50px"}}  name="endingDate" onChange={handlechanged}  />
        </Form.Item>
       
        {/* <Form.Item label="Button" style={{overflow:"visible"}}> */}
        <Addmembers style= {{marginLeft:"50px"}}  choice={"add"} handeluser={handeluser} newprojectuser={newprojectuser} showl={showl}/>
        {/* </Form.Item> */}
       
<Collapse defaultActiveKey={['1']} >
    <Panel header="projects collaborators" key="1">
    <div>
    <ListGroup>
    {(userselect.length && show )?userselect.map((el)=>{
    return(
    
  <ListGroup.Item style={{height:"55px"}}>   <div style={{display :"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
  < Avatar src={el.avatar} alt="avatar" />
  <div style={{display:"flex",justifyContent:"space-around",alignItems:" center",width:"250px" ,marginLeft:"20px"}}>
 <h5>{el.firstName}</h5> <h5> {el.lastName}</h5> </div> </div>                 
 </ListGroup.Item>
    )})
    
    :<h5>please choose yours collaborators</h5>}
    </ListGroup>
 </div> 
    </Panel>
    </Collapse>,

<Button   onClick={handelconfirm} variant="outline-primary" style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100px" , height:"40px", boxShadow: "0px 1px 10px 1px",marginLeft:"200px" ,marginBottom:"30px"}}> Confirm</Button>
      </Form>
      {/* <Button onClick={{handlesave}}>save</Button>
      <Button onClick={{handleClose}}>save</Button> */}
      </Modal>
  </>
);  
}
export default Add

