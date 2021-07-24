import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_all_users } from '../actions/authactions'
import { Col, Container, Row ,Table} from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar';
import group from'../icons/group.svg'
import Collab_page_search from'../components/collab_page_search'
function Collabpage_user() {

    const[search,setSearch]=useState(false)
    


    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(load_all_users())
        
    },[])
     const users=useSelector(state=>state.auth.userdata)
     const headtab=[ "Avatar","First Name", "Last Name","Email","Profession","Skills","Github","Linkedin","Phone"]
     const[searchuser,setSearchuser]=useState(users)
     const handlesearch=(val)=>{
        setSearchuser(val)
        setSearch(true)
      
      }

      const useraffiche= search?searchuser:users
console.log("useraffiche",useraffiche)
    return (
        <div>
 <Collab_page_search users={users} handlesearch={handlesearch}/>



             {useraffiche?
        <Container>
          <div className="title_icon" style={{display:"flex",justifyContent:"center", alignItems:"center",marginBottom:"30px",fontStyle:"italic",textAlign:"center"}}>
          <p>  <img src={group}  alt="group icon" style={{width:"50px" }}/>
            <h3 style={{width:"300px",margin:"0px"}}> Collaborators</h3> </p> </div>
        
        <Table responsive className="table-light table-hover tab-shadow  table-sm" style={{backgroundColor:"#f5f6f8" }}>
        <caption>Collaborators</caption>
  <thead className= "head  " >
    <tr  className="align-middle" style={{   fontFamily:  "'Roboto', monospace " , fontSize:"18px", fontWeight:"bold",textAlign:"center",height:"80px"}}>
      <th style={{verticalAlign:"middle" ,paddingLeft:"20px"}} >Collaborators</th>
      {headtab.map((el, index) => (
        <th style={{verticalAlign:"middle",paddingLeft:"20px"}}  key={index}>{el}</th>
      ))}
      {/* <th><img src="update.svg" alt="setting icon"style={{width:"30px",cursor:"pointer" ,textAlign:"center"}} /></th> */}
    </tr>
  </thead>
  <tbody  className= "text-center" >
   
    {(useraffiche.length)?useraffiche.map((el,index)=>
       <tr className="align-middle" style={{   fontFamily:  "'Roboto',  sans-serif " , fontSize:"18px",fontWeight:"bold",textAlign:"center",height:"80px", overflowWrap: "break-word",textAlign:"center"}}>
      
          
              <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> {index}</td>
          <td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <div> <Avatar src={el.avatar} alt="avatar" /> </div>     </td> 
           <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <p>{el.firstName}</p>     </td>  
          
           <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <p>{el.lastName} </p>  </td> 
           <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <p> {el.email}</p>  </td>
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}}>  <p>{el.profession} </p>  </td>
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <p style={{ overflowWrap: "break-word",textAlign:"center"}}> {el.Skills}</p>   </td> 
          
          <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <p> {el.github} </p>   </td>
        <td style={{verticalAlign:"middle" ,paddingLeft:"20px"}} > <p> {el.linkedin}  </p> </td>
       
     
<td  style={{verticalAlign:"middle" ,paddingLeft:"20px"}}> <p> {el.phone} </p>  </td>       
          
            </tr> ):null}   
          </tbody>
 
      </Table> 
      </Container>:null}
        </div>
    )
}

export default Collabpage_user
