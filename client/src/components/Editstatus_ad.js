
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editproject } from '../actions/projectActions'
import { edittask, loadtask } from '../actions/taskactions'
import { Select } from 'antd';
import editstatus_ad from '../style/editstatus.css'
function Editstatus({el,id,choice,prog,progress,handleload, load}) {
    const { Option } = Select;
    // const status=useRef()
  const[editstatus, setEditstatus] = useState({status:""})

useEffect(()=>{
  dispatch(loadtask(id))
  setEditstatus({status:el})

},[id])


const t=useSelector(state=>state.task.taskdata)

 const dispatch=useDispatch()
console.log(progress)
const handleselect=(e)=>{
    console.log(e)
    setEditstatus({status:e})
    //console.log(status.current.value)
    if(choice==="project"){
if(e==="Done"){
dispatch(editproject(id,{status:e,progressproject:100}));t.forEach((el)=>dispatch(edittask(el._id,{status:e,progression:100,progValidation:"valid"})))}
// else if(e==="Undone"){dispatch(editproject(id,{status:e,progressproject:0})); t.forEach((el)=>dispatch(edittask(el._id,{status:e,progression:0,progValidation:"valid"})))}
else {dispatch(editproject(id,{status:e,progressproject:prog}));} 
}  
 
 else { 
  if(e==="Done"){
    dispatch(edittask(id,{status:e,progression:100,progValidation:"valid"}));
    handleload(load); }
    else if(e==="Undone"){dispatch(edittask(id,{status:e,progression:0,progValidation:"valid"}));handleload(load); }
    else {dispatch(edittask(id,{status:e,progression:progress,progValidation:"valid"}));handleload(load);} 
  
}

}

    return (
       
<Select
    showSearch
    style={{ width: "100px",backgroundColor:"#f8f9fa",padding:"0px" }}
    placeholder="Select a person"
    optionFilterProp="children"
    id={id}
     value={editstatus.status}
    defaultValue={editstatus.status}
    // ref={status}
    onChange={handleselect}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
      <Option  style={{ color:"#3bb54a"}}value="Done">Done</Option>
<Option  style={{ backgroundColor:"#fdab3d"}} value="In progress">In progress</Option>
<Option style={{ backgroundColor:"#c50920"}} value="Undone">Undone</Option> 
  </Select>
      
    )
}

export default Editstatus
