import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproject } from '../actions/projectActions'
import { deletetask, loadalltask, loadtask } from '../actions/taskactions';
import styledelete from'../style/styledelete.css';
import remove from'../icons/remove.svg'
import { load_all_users } from '../actions/authactions';
import {deleteprofile} from '../actions/authactions';
// import { loadtask} from '../actions/taskactions';

function Delete_collab({id}) {
    const dispatch = useDispatch()
    const [del , setDel] = useState(false)


 useEffect(()=>{
dispatch(loadalltask())
    },[])

const t=useSelector(state=>state.task.taskdata)
// var projtasks=t?t.filter((el)=>el.project===id):null
const collabtask=t?t.filter((el)=>el.user===id):null



const handelclick=(e)=>{
setDel(true)
console.log(e.target.id)
if(collabtask.length){alert('this collaborator has tasks ,you must  from tasks and project  befor delete him')}
else{
dispatch(deleteprofile(e.target.id))
}


}

    return (
        <div>
            <img  className="delete_style" src={remove}  alt="delete icon"id={id} onClick={handelclick}  style={{width:"30px",cursor:"pointer" ,marginTop:"10px"}}/>
        </div>
    )
}

export default Delete_collab

