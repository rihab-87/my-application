import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../actions/authactions'
import {editproject, loadproject }from'../actions/projectActions'
import { edittask, loadtask } from '../actions/taskactions'
import { Input } from 'antd';

import pencil1 from'../icons/pencil1.svg'

function Edit({el,id,name,choice}) {

    const { TextArea } = Input;

    const [edit, setEdit] = useState(false)
    const [edit_info, setEdit_info] = useState()
    const dispatch = useDispatch()
    const handelClick=()=>{
        setEdit(true)
        }
        const handelchange=(e)=>{
        setEdit_info({[e.target.name]:e.target.value})
        console.log(edit_info)
       
        }
        const handelsave=(e)=>{
           
            if(e.key==='Enter'){
                setEdit(false)
                if(choice==="project"){
        dispatch(editproject(e.target.id,edit_info))
        // dispatch(loadproject())
    }
else{ 
    dispatch(edittask(e.target.id,edit_info))
    // dispatch(loadtask(e.target.id))
}
}

        }
        
    return (
        <div style={{display:"flex" ,justifyContent:"center"}}  >
            {!edit?<div style={{maxWidth:"200px", overflowWrap: "break-word",textAlign:"center"}}>{el}</div>:
           <TextArea  autoSize id= {id} type ="text" defaultValue={el}  name= {name} onChange={handelchange} onKeyPress={handelsave}/>}
               <img src={pencil1} alt='edite icon'  style={{width:"15px",cursor:"pointer"}} onClick={handelClick}/>   
               
       
        </div>

    )
}

export default Edit
