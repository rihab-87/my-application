
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editproject } from '../actions/projectActions'
import { edittask } from '../actions/taskactions'
import { Select } from 'antd';
import editstatus from '../style/editstatus.css'
function Editstatus({el,id,choice,prog,progress,handleload, load}) {
    const { Option } = Select;
    // const status=useRef()
  const[editstatus, setEditstatus] = useState({status:""})
console.log("proggggg",prog)
useEffect(()=>{

  setEditstatus({status:el})

},[el,id,prog])




 const dispatch=useDispatch()
console.log(progress)
const handleselect=(e)=>{
    console.log(e)
   
    //console.log(status.current.value)
    if(choice==="project"){
if(e==="Done"){if(prog<100){ console.log("prog",prog); alert('the progression rate of the  project tasks is less than 100% , make all the project tasks status  done before');}
else {  setEditstatus({status:e});dispatch(editproject(id,{status:e,progressproject:100}))};}

else if(e==="Undone"){if(prog>0 && prog<=100){alert('the progression rate of the project tasks is greater than 0 ,make all the project tasks status  undone before ');}
 else{ setEditstatus({status:e}); dispatch(editproject(id,{status:e,progressproject:0}));} 
 }
else if (e==='In progress') { if(prog==0 || prog==100){alert('the progression rate of the project tasks is not in progress,make all the project tasks status in progress  before ');}
  else{ setEditstatus({status:e});dispatch(editproject(id,{status:e,progressproject:prog})); }} 
}  
 
 else { 
  if(e==="Done"){
    dispatch(edittask(id,{status:e,progression:100,progValidation:"invalid"}));
    handleload(load); }
    else if(e==="Undone"){dispatch(edittask(id,{status:e,progression:0,progValidation:"invalid"}));handleload(load); }
    else {dispatch(edittask(id,{status:e,progression:progress,progValidation:"invalid"}));handleload(load);} 
  
}

}

    return (
      <div>
    {/* <h1>{prog}  </h1>  */}
  
<Select
    showSearch
    style={{ width: "100px",backgroundColor:"c",padding:"0px" }}
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
      <Option  style={{ backgroundColor:"#3bb54a"}}value="Done">Done</Option>
<Option  style={{ backgroundColor:"#fdab3d"}} value="In progress">In progress</Option>
<Option style={{ backgroundColor:"#c50920"}} value="Undone">Undone</Option> 
  </Select>
  </div>
    )
}

export default Editstatus
