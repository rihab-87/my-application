import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editprofile} from '../actions/useractions'
import {editproject, loadproject }from'../actions/projectActions'
import { edittask, loadtask } from '../actions/taskactions'
import { Input } from 'antd';

import pencil1 from'../icons/pencil1.svg'

function Editprofile({el,id,name,choice,handleupdate}) {

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
                
        dispatch(editprofile(e.target.id,edit_info))
        handleupdate()
    }

}

        
        
    return (
        <div style={{display:"flex" ,justifyContent:"center"}}  >
            {!edit?<h6 style={{maxWidth:"200px", overflowWrap: "break-word",textAlign:"center"}}>{el}</h6>:
           <TextArea  autoSize id= {id} type ="text" defaultValue={el}  name= {name} onChange={handelchange} onKeyPress={handelsave}/>}
               <img src={pencil1} alt='edite icon'  style={{width:"15px",cursor:"pointer"}} onClick={handelClick}/>   
               
       
        </div>

    )
}

export default Editprofile
