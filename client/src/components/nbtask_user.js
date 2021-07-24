import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import nbtaskuser from '../style/nbtaskuser.css'
// import {Badge} from'react-bootstrap'
import { Badge } from 'antd';
import { getalltask } from '../actions/alltaskaction';

function Nbtask({userid,projectid}) {

    const dispatch = useDispatch()
    // const[load,setLoad]=useState()
    //  const[nb,setNb]=useState()
    
   useEffect(() => {
    
   dispatch(getalltask())
     
//   console.log(alltask)
//  setNb(alltask?alltask.length:0)
   
  },[])
   const alltask=useSelector(state=>state.alltask.alltaskdata)
//  const alltask = JSON.parse(localStorage.getItem('alltask'))
// console.log(id)
// console.log("alltask",alltask)
 const taskpj=alltask?alltask.filter((el)=>el.project===projectid && el.user===userid):null

  console.log("taskpj",taskpj)
 const nb=(taskpj?taskpj.length:0)


// const nbaffiche=()=>{
//     switch(choice) {

//         case "done"   :return( <Badge count={nb} showZero>
//                                <h5 className="head-example  taskdone_style" style={{color:"#3bb54a",fontWeight:"bolder"}}  >  tasks </h5>
//                                 </Badge>)
//         case "undone" : return ( <Badge count={nb} showZero>
//                  <h5 className="head-example  taskun_style"   style={{color:"#e6667a",fontWeight:"bolder"}}  >  tasks </h5>
//                   </Badge>)
   
//          case "in progress"   : return(<Badge count={nb} showZero>
//            <h5 className="head-example taskpro_style" style={{color:"#fdab3d",fontWeight:"bolder"}}   >  tasks </h5>
//             </Badge>)      
   
   
   
//               }

// }



    return (
        <div>
           <Badge count={nb} showZero>
         <h5 className="head-example  taskus_style" style={{color:"#d1be40",fontWeight:"bolder"}}  >  tasks </h5>
        </Badge>

        </div>
    )
}

export default Nbtask
