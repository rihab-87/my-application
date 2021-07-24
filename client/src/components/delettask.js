import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deletetask } from '../actions/taskactions';
import styledelete from'../style/styledelete.css';
import remove from'../icons/remove.svg'

function Delettask({id,choice}) {
    const dispatch = useDispatch()
    const [del , setDel] = useState(false)

const handelclick=(e)=>{
setDel(true)
console.log(e.target.id)
dispatch(deletetask(e.target.id))

}

    return (
        <div>
            <img  className="delete_style" src={remove}  alt="delete icon"id={id} onClick={handelclick}  style={{width:"30px",cursor:"pointer" ,marginTop:"10px"}}/>
        </div>
    )
}

export default Delettask

