import React, { useEffect, useState } from 'react'
// import {Button,Modal,Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addtask } from '../actions/taskactions';
import Usertask from './Usertask';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import moment from 'moment';
import { Option } from 'antd/lib/mentions';
import Sendemail from './sendemail'
import addpro from'../icons/addpro.svg'
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
  Modal
} from 'antd';
import { load_one_project } from '../actions/projectActions';




moment().format();

function Addtasks({id,handleload,load}) {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  useEffect(() => {
    
    dispatch(load_one_project(id))
    // dispatch(load_all_users())
    // setCollabselect('')
        }
    , [])

    const projects = useSelector(state => state.project.projectdata)
    console.log(projects)

    const collab=projects.user


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [newtask, setNewtask] = useState({
taskName:'',
taskDesc:'',
startingDate:'',
endingDate:'',
status:'',
project:id,
user:'',
progression:0,
progValidation:'invalid'

});
const[colltask,setColltask]=useState()
const dispatch = useDispatch()
const handlechange=(e)=>{
setNewtask({...newtask,[e.target.name]:e.target.value})

}
const handleselect=(e)=>{
  console.log(e)
     setNewtask({...newtask,status:e,progression:(e==="Done")?100:0})
    
    }
// const handclick=(e)=>{
//   console.log(e)
//   // handleselect(e)
// }




   const  handlechangesd=(date,dateString,e)=>{
     const dates=moment(date).format("YYYY/MM/DD")
     console.log(date)
    setNewtask({...newtask,startingDate:dateString}) 
   }

   const  handlechanged=(date,dateString,e)=>{
    const datee=moment(date).format("YYYY/MM/DD")
    console.log(datee)
   setNewtask({...newtask,endingDate:dateString})
  }



    const handleselectcoll=(e)=>{
      // setColltask(colla)
      setNewtask({...newtask,user:e})
    // console.log(colltask)

    }


const handlesave=()=>{
    console.log(newtask)
    dispatch(addtask(newtask))
    handleload(load)
    handleClose()
    setNewtask({
      taskName:'',
taskDesc:'',
startingDate:'',
endingDate:'',
status:'',
project:id,
user:'',
progression:0,
progValidation:'invalid'

}
    )
}

const { TextArea } = Input;
const { Option } = Select;
return (
  <>
 
      <Button type="default" shape="round"   onClick={handleShow } style={{display:"flex",justifyContent:"center", alignItems:"center", width:"200px" , height:"50px",backgroundColor:"#f8f9fa", boxShadow: "0px 1px 10px 1px",marginLeft:"80px",marginBottom:"50px",marginTop:"16px"}}>
      <img src={addpro} alt="addicon" style={{width:"30px",cursor:"pointer"}}/><h5 style={{margin:"0px"}}>Create a new Task</h5> 
      {/* <img src="check-circle.gif" alt="addicon" style={{width:"30px",cursor:"pointer"}}/> */}
      
      </Button>

      <Modal title="Create new task" visible={show} onOk={handlesave} onCancel={handleClose}>
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
        <Form.Item label="Task name" style={{overflow:"visible"}}>
        <Input style={{marginLeft:"50px"}} type="text" name="taskName" value={newtask.taskName} onChange={handlechange}/>
        </Form.Item>
        <Form.Item label="Task description" style={{overflow:"visible"}}>
        <TextArea style={{marginLeft:"50px"}}type="text" name="taskDesc" value={newtask.taskDesc} onChange={handlechange} autoSize/>
        </Form.Item>
        <Form.Item label="Task status" style={{overflow:"visible"}}>
          <Select  style={{marginLeft:"50px"}}value={newtask.status} onSelect={handleselect}>
            <Option  value="Done">Done</Option>
            <Option value="Undone">Undone</Option>
            <Option value="In progress">In progress</Option>
          </Select>
        </Form.Item>
        <Form.Item label="starting Date" style={{overflow:"visible"}}>
          <DatePicker  style={{marginLeft:"50px"}} name="startingDate"  defaultValue={newtask.startingDate}  onChange={handlechangesd}  />
        </Form.Item>
        <Form.Item label="endinging Date" style={{overflow:"visible"}}>
          <DatePicker  style={{marginLeft:"50px"}} name="endingDate"  onChange={handlechanged} />
        </Form.Item>
       
        <Form.Item label="Collaborator" style={{overflow:"visible"}}>
          
        {/* <Usertask  style={{marginLeft:"50px"}}id={id} handleuser={handleuser}/> */}
         
        <Select
    showSearch
    style={{ width: 200, marginLeft:"50px" }}
    placeholder="Select a collaborator "
    optionFilterProp="children"
    // onChange={handleselect}
    onSelect={handleselectcoll}
    defaultValue=''
    // onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
     value={newtask.user}
  >   
    {collab?collab.map((e, key) => {
       return <Option key={key} value={e._id}  >{e.firstName}</Option>;
   }):null}
  </Select> 
        </Form.Item>
        <Form.Item label="send email">
          <Sendemail  style={{marginLeft:"50px"}}id={newtask.user}/>
        </Form.Item>
        {/* <Button  variant="primary" style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100px" , height:"40px", boxShadow: "0px 1px 10px 1px",marginLeft:"350px" }}> Confirm</Button> */}
      </Form>

      </Modal>
   
      {/* <Modal.Body>
<input type="text" name="taskName" onChange={handlechange}/>
<input type="text" name="taskDesc" onChange={handlechange}/>
<input type="text" name="startingDate" onChange={handlechange}/>
<input type="text" name="endingDate" onChange={handlechange}/> */}












  {/* <Form.Select aria-label="choose task status" onChange={handleselect}>
   
    <option value="Done">Done</option>
    <option value="Inprogress">Inprogress</option>
    <option value="Undone">Undone</option>
  </Form.Select> */}

  {/* <label >Choose a status:</label>
  
<select name="status" onChange={handleselect}>
<option value="choose status task">choose status task</option>
<option value="Done">Done</option>
    <option value="Inprogress">Inprogress</option>
    <option value="Undone">Undone</option> 
  
 </select> */}







      {/* </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlesave}>
          Save Changes
        </Button>
        {console.log(newtask)}
      </Modal.Footer>
    </Modal> */}
  </>
       
    )
}

export default Addtasks
