import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproject } from '../actions/projectActions'
import { deletetask, loadalltask, loadtask } from '../actions/taskactions';
import styledelete from'../style/styledelete.css';
import remove from'../icons/remove.svg'
// import { loadtask} from '../actions/taskactions';
function Delete({id,choice}) {
    const dispatch = useDispatch()
    const [del , setDel] = useState(false)


 useEffect(()=>{
dispatch(loadtask(id))
    },[])

const t=useSelector(state=>state.task.taskdata)
var projtasks=t?t.filter((el)=>el.project._id===id):null




const handelclick=(e)=>{
setDel(true)
console.log(e.target.id)

dispatch(deleteproject(e.target.id))
 projtasks.map((el)=>dispatch(deletetask(el._id)))


}

    return (
        <div>
            <img  className="delete_style" src={remove}  alt="delete icon"id={id} onClick={handelclick}  style={{width:"30px",cursor:"pointer" ,marginTop:"10px"}}/>
        </div>
    )
}

export default Delete

