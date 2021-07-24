import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadalltask } from '../actions/alltaskaction'
import { Progress,Button } from 'antd';
import { editproject } from '../actions/projectActions';
import { loadtask } from '../actions/taskactions';
import icons8 from'../icons/icons8.gif'


function Projectprogress({projectid,tasks}) {
const dispatch=useDispatch()
 const[taux ,setTaux]=useState(0)

      
   
// useEffect(() => {
  
//   if(progs===100){ dispatch(editproject(tasks.project,{ status:"Done",progressproject:progs}));
//    }
//   else if (progs <100 && progs>0){ dispatch(editproject(tasks.project,{ status:"In progress",progressproject:progs}));
//  }
//    else {dispatch(editproject(tasks.project,{ status:"Undone",progressproject:progs}));
//    }
// },[tasks,dispatch])

//  const tasks=useSelector(state=>state.alltask.alltaskdata)
//    const task= JSON.parse(localStorage.getItem('taskdata'))
// console.log('tasks',task)

 
  // var task=tasks.filter((el)=>el.project===id) 
  // console.log('task:',task)
  const onclick=()=>{
  if(tasks){
    var progg=(tasks.filter((el)=>el.progValidation==="valid").reduce((a,i)=>a+i.progression,0)/(tasks.length))
  var progs=Math.ceil(progg)
 setTaux(progs)}
  else {  progs=0 ;setTaux(progs)}
   
  if(progs===100){ dispatch(editproject(projectid,{ status:"Done",progressproject:progs}));
}
else if (progs <100 && progs>0){ dispatch(editproject(projectid,{ status:"In progress",progressproject:progs}));
}
else {dispatch(editproject(projectid,{ status:"Undone",progressproject:progs}));
}
    
  }

    return (
        <div style={{marginRight:"80px"}} >
         <Button type="default" shape="round"  onClick={onclick} style={{ width:"250px" , height:"50px",backgroundColor:"#f8f9fa", boxShadow: "0px 1px 10px 1px",marginBottom:"50px",textAlign:"center",marginRight:"16px"}}>
        <h5 style={{margin:"0px",paddingTop:"8px"}}> % Progress Project</h5> </Button>  
        {taux===0?
           <Progress
        
        type='circle'
        width='100px'
      strokeColor={{
      
        '0%': '#e96a10',
        '100%': '#e91410',
      }}
      percent={taux}
      // status="exception"
// defaultPercent={0}
    />:    <Progress
        
    type='circle'
    width='100px'
  strokeColor={{
  
    '0%': '#108ee9',
    '100%': '#87d068',
  }}
  percent={taux}
  status="active"
// defaultPercent={0}
/> }
        </div>
    )
}

export default Projectprogress
