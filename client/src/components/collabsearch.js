import React from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
function collabsearch({collab,handlecollsearch}) {

const handlechange =(e)=>{
const collfind=collab.filter((el)=> (el.firstName).toLowerCase().includes((e.target.value).toLowerCase()))
handlecollsearch(collfind,true)
}


    return (

      <Form inline style={{display:"flex",justifyContent:"center"}}>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handlechange}  />
      <Button >Search</Button>
    </Form>


       
    )
}

export default collabsearch
