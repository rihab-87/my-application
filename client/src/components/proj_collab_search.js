import React, { useEffect } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { load_all_users } from '../actions/authactions'
function Proj_collab_search({projectdata, handlesearch}) {

    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(load_all_users())
    
    },[])
    
     const users=useSelector(state=>state.auth.userdata)


const handlechange =(e)=>{
//  const collfind=collab.filter((el)=> (el.firstName).toLowerCase().includes((e.target.value).toLowerCase()))
const uss=users.filter((el)=>(el.firstName).toLowerCase().includes((e.target.value).toLowerCase()))
const ussid=uss.map((el)=>el._id)

 const uspro=projectdata.filter((el)=> (ussid.map((e)=>el.user.includes(e))).includes(true)===true  )


console.log("uspro",uspro)
handlesearch(uspro)
}


    return (

      <Form inline style={{display:"flex",justifyContent:"center"}}>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handlechange}  style={{width:"100px"}} />
    
    </Form>


       
    )
}

export default Proj_collab_search
