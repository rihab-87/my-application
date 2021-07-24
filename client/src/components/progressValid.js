import React, { useEffect, useState } from 'react'
import { Progress ,Radio,Form,InputNumber } from 'antd';
import { edittask } from '../actions/taskactions';
import { useDispatch } from 'react-redux';


function Progres({status,progress,isvalid,id}) {
  const[provalid,setProvalid]=useState("")
  useEffect(()=>{
    setProvalid(isvalid)

  },[id,isvalid])


const dispatch = useDispatch()
const onChange=(e)=>{
  setProvalid(e.target.value)
  // dispatch(edittask(id,{progValidation:e.target.value}))
  if(progress===100 &&  e.target.value==="valid"){ dispatch(edittask(id,{ status:"Done",progValidation:e.target.value}));
}
else if (progress<100 && progress>0 && e.target.value==="valid"){ dispatch(edittask(id,{ status:"In progress",progValidation:e.target.value}));
}
else if  (progress===0 &&  e.target.value==="valid") {dispatch(edittask(id,{ status:"Undone",progValidation:e.target.value}));
}





}
const onStep=(value)=>{
  setProvalid("invalid")
  // dispatch(edittask(id,{progression:value,progValidation:"invalid"}))

  if(value===100){ dispatch(edittask(id,{ status:"Done",progression:value,progValidation:"invalid"}));
}
else if (value<100 && value>0){ dispatch(edittask(id,{ status:"In progress",progression:value,progValidation:"invalid"}));
}
else {dispatch(edittask(id,{ status:"Undone",progression:value,progValidation:"invalid"}));
}
    
  }














    return (
        <div>
  
{provalid==="valid"? <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={progress}
      status="active"
      
    />  :
    <Progress
    strokeColor={{
      from: '#d21d1da8',
      to: '#d21d1d',
    }}
    percent={progress}
    status="active"
    status="exception" 
  />
}
{(status)==="In progress"? <Form.Item label="progress %"><InputNumber  min={0} max={100} defaultValue={progress} step={10} onStep={onStep} /> </Form.Item>:null}
{/* <h2>{isvalid}</h2>   
<h2>{provalid}</h2>     */}
<Radio.Group onChange={onChange} value={provalid} defaultValue={isvalid}>
      <Radio value={"valid"}>valid</Radio>
      <Radio value={"invalid"}>Invalid</Radio>
</Radio.Group>

        </div>
    )
}

export default Progres
