import React, { useState } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';
import search from '../icons/search.svg'
function Collab_page_search ({users,handlesearch}) {

const[searchp ,setSearchp]=useState()
const handlechange=(e)=>{
    const usersearch=users.filter((el)=> (el.firstName).toLowerCase().includes((e.target.value).toLowerCase())
    
    ||(el.lastName).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.email).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.profession).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.Skills).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.github).toLowerCase().includes((e.target.value).toLowerCase())
    ||(el.linkedin).toLowerCase().includes((e.target.value).toLowerCase())
    ||( el.phone== e.target.value)
    
    )
    setSearchp(usersearch)
    handlesearch(usersearch)
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

export default Collab_page_search
