import React, { useState } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';
import search from '../icons/search.svg'
function Projectsearch ({alltask,handlesearch}) {

const[searcht ,setSearcht]=useState()
const handlechange=(e)=>{
    const tasksearch=alltask.filter((el)=> (el.taskName).toLowerCase().includes((e.target.value).toLowerCase())
    
    ||(el.taskDesc).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.status).toLowerCase()===((e.target.value).toLowerCase())
    ||(el.progValidation).toLowerCase()===((e.target.value).toLowerCase())
    ||(el.user.firstName).toLowerCase()===((e.target.value).toLowerCase())
    ||(+new Date(el.startingDate)=== +new Date(e.target.value))
    ||(+new Date(el.endingDate)=== +new Date(e.target.value))
     ||( el.progression== e.target.value)
    )
    setSearcht(tasksearch)
    handlesearch(tasksearch)
}


console.log(searcht)

    return (
        
      
       <Form inline  style={{display:"flex",justifyContent:"center" ,width:"500px",marginRight:"auto",marginLeft:"auto",marginBottom:"30px"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handlechange} style={{width:"80%"}}/>
      {/* <Button variant="outline-info">Search</Button> */}
      <img src={search} alt="search" style={{width:"30px"}}/>
    </Form>
       
        
    )
}

export default Projectsearch
