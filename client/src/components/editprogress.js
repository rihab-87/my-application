import React, { useEffect, useState } from 'react'
import { InputNumber,Progress  } from 'antd';
import { edittask } from '../actions/taskactions';
import { useDispatch } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css'
// import { Button, Progress } from 'semantic-ui-react'



function Editprogress({progress,id,isvalid,handleload ,load }) {
  const[prog ,setProg]=useState()
  console.log(progress)
  useEffect(() => {
  console.log(progress)
    setProg(progress)
    
  },[progress])



    
     console.log(progress)
     const dispatch = useDispatch()
const onStep=(value,info)=>{
console.log(value,info)
setProg(value)

if(value===100){dispatch(edittask(id,{ status:"Done",progression:value,progValidation:"invalid"}))}

else if(value<100 && value>0){dispatch(edittask(id,{ status:"In progress",progression:value,progValidation:"invalid"}))}
else {dispatch(edittask(id,{ status:"Undone",progression:value,progValidation:"invalid"}))}
}

    return (
        <div>
          {console.log(prog)} 
          <InputNumber min={0} max={100}  value={prog} defaultValue={progress } step={10} onStep={onStep}  style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px", fontWeight:"bolder",textAlign:"center"}}/>
          { isvalid==="valid"?  
            <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={prog}
      status="active"
     
    /> 
     :
     
     <Progress
      strokeColor={{
        from: '#d21d1da8',
        to: '#d21d1d',
      }}
      percent={prog}
      status="active"
      status="exception" 
    /> }
           
        </div>
    )
}

export default Editprogress
