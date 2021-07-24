import React, { useState,useEffect } from 'react'
import {FormControl,InputGroup,Modal} from'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {load_all_users} from '../actions/authactions';
import {editproject}from'../actions/projectActions'
import { edittask,loadtask } from '../actions/taskactions';
import Collabsearch from './collabsearch';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Button} from'antd'

function Addmembers({handeluser ,showl, newprojectuser,choice,projectid,handleload,taskid,projectusers,load}) {
const [show, setShow] = useState(false);

const handleClose = () =>
{setShow(false);
if(choice==="edit_ptoject"){
  dispatch(editproject(projectid,usersupdat))
  handleload(load)
  
}
  if(choice==="task"){
    dispatch(edittask(taskid,usersupdat))
     handleload(load)
  }

}


const handleShow = () => setShow(true);

const dispatch = useDispatch();
const [usercheked, setUsercheked] = useState(!newprojectuser.length?[]:newprojectuser);
// const [usercheked, setUsercheked] = useState([]);
 useEffect(() => {
  
 

dispatch(load_all_users())


if(choice==="edit_project"){

  dispatch(loadtask(projectid))

}
}, [ show,dispatch])

const allusers=useSelector(state=>state.auth.userdata)
const projecttasks=useSelector(state=>state.task.taskdata)
//  console.log(projecttasks)
const [check, setCheck] = useState(false);

 const [usersupdat ,setUsersupdat]=useState({user:[]})
// const [newprojectuser, setNewprojectuser] = useState([])
const tab=[]
const [collsch, setCollsch] = useState(allusers);
const [search, setSearch] = useState(false);
const checkuser=(e,check,id)=>{
    const userchk=allusers.filter((el)=>(el._id===id ))
     const usertask=newprojectuser.includes(id) 
      // projecttasks.filter((el)=>el.user._id===id).length()
    // const usertask=projecttasks.filter((el)=>el.user._id===id)
    
    console.log(usertask )
    
    if(check){setUsercheked([...usercheked,userchk[0]._id])
     
    }
   else if((choice==="edit_project")&&(!check)&& usertask) { alert('befor delete a collaborator ffrom a project you must discharge the collaborator from his task')}
   else
    {setUsercheked(usercheked.filter((el)=>  el!==userchk[0]._id ))
    e.target.checked=false}

}

const handelcheck=(e)=>{
setCheck(!check)
// console.log(e.target.checked)
checkuser(e,e.target.checked,e.target.id)
console.log(usercheked)

}

const handelsave=()=>{
  if(choice==="add"){
handeluser(usercheked)

  }
else if(choice==="task"){
  if(usercheked.length===1){
console.log(usersupdat)
setUsersupdat({user:usercheked})
  }
  else alert('you must choose one collaborator to one task')
}
else setUsersupdat({user:usercheked})
}

const handlecollsearch=(val,b)=>{
  setCollsch(val)
  setSearch(b)
}


const allprojectusers=(allusers&& projectusers)?allusers.filter((el)=>(projectusers).includes(el._id)===true):null
// const choiceaffiche= (choice==="task")?allprojectusers:allusers
if(choice==="task"){
  var choiceaffiche=allprojectusers
}
else if(search){choiceaffiche=collsch }
else {choiceaffiche=allusers}

return (
  <>
    <Button variant="outline-primary"onClick={handleShow} style={{display:"flex",justifyContent:"center", alignItems:"center", width:"200px" , height:"50px", boxShadow: "0px 1px 10px 1px",marginLeft:"150px" ,marginBottom:"30px"}}>
    Add Collaborators
    </Button>

    <Modal show={show} onHide={handleClose} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>choose members</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Collabsearch collab={allusers} handlecollsearch={handlecollsearch}/>
{choiceaffiche?choiceaffiche.map((el)=>
  
<InputGroup style={{marginTop:"10px",marginBottom:"10px"}} >

{(usercheked.includes(el._id )===true)? <InputGroup.Checkbox value={el._id}    id={el._id} type="checkbox"   onChange={handelcheck} checked />:
    
    <InputGroup.Checkbox  id={el._id} type="checkbox"  value={el._id} onChange={handelcheck}/>} < Avatar src={el.avatar} alt="avatar" /><FormControl value={[el.firstName,  el.lastName 
    ,'  ' ,el.profession].join(' ') } >  
    {/* < div style={{display:"flex",justifyContent:"space-around"}}>
  <h3>{el.firstName} {el.lastName} </h3> 
 <h5>{el.profession}</h5> </div> */}
  </FormControl>
  </InputGroup>):<h5>aucun project collaborators</h5>}




      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handelsave}>
          Save 
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

    
}

export default Addmembers

