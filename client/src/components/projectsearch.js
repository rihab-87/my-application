import React, { useEffect, useState } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { load_all_users } from '../actions/authactions';
import search from '../icons/search.svg'
function Projectsearch ({projectdata,handlesearch}) {

    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(load_all_users())
    
    },[])
    
     const users=useSelector(state=>state.auth.userdata)
// const userproject =projectdata?projectdata.map((el)=>(users.filter((p)=>el.user.includes(p._id)===true))):null
// console.log("userproject",userproject)

const[searchp ,setSearchp]=useState()
const handlechange=(e)=>{
    const projsearch=projectdata.filter((el)=> (el.projectName).toLowerCase().includes((e.target.value).toLowerCase())
    
    ||(el.projectDesc).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.status).toLowerCase()===((e.target.value).toLowerCase())
    ||(+new Date(el.startingDate)=== +new Date(e.target.value))
    ||(+new Date(el.endingDate)=== +new Date(e.target.value))
     ||( el.progressproject== e.target.value)
    ||((users.filter((us)=> (us.firstName).toLowerCase().includes((e.target.value).toLowerCase()) )).map((b)=>b._id).map((t)=>el.user.includes(t)).includes(true)===true )
    )
    console.log("projsearch",projsearch)
    setSearchp(projsearch)
    handlesearch(projsearch)
}


console.log(searchp)

    return (
        
      
       <Form inline  style={{display:"flex",justifyContent:"center" ,width:"500px",marginRight:"auto",marginLeft:"auto",marginBottom:"30px"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handlechange} style={{width:"80%"}}/>
      {/* <Button variant="outline-info">Search</Button> */}
      <img src={search} alt="search" style={{width:"30px"}}/>
    </Form>
       
        
    )
}

export default Projectsearch
