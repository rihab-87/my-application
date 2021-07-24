

import React, { useState,useEffect, useRef } from 'react'
import {Button,FormControl,InputGroup,Modal} from'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { load_all_users } from '../actions/authactions';
import { addcollab, deletecollab, initcollab } from '../actions/collabActions';
import { edittask,loadtask } from '../actions/taskactions';
import addgroup from'../icons/addgroup.svg'

function Add_task_memb({taskid,projectusers,taskuser,load,handleload}) {


    const dispatch = useDispatch();
    const [usercheked, setUsercheked] = useState({user:taskuser});
    const [show, setShow] = useState(false);
    const [save, setSave] = useState(false);
    useEffect(() => {
        dispatch(load_all_users())
  
        }, [ ])

  
    const handleClose = () => {setShow(false);

        // dispatch(edittask(taskid,usercheked))
        // handleload(load)
      }

    const handleShow = () => setShow(true);

    const [check, setCheck] = useState(false);
    
    const [usersupdat ,setUsersupdat]=useState()

    
    
    const allusers=useSelector(state=>state.auth.userdata)
    const taskusers=(allusers&& projectusers)?allusers.filter((el)=>projectusers.includes(el._id)===true):null
console.log(taskusers)
console.log(projectusers)
console.log(usercheked)
    const checkuser=(e,check,id)=>{
        // const userchk=taskusers.filter((el)=>(el._id===id ))
        //  console.log(userchk )
        //  let checkeduser  =userchk[0]._id
      if(check){setUsercheked({user:[...usercheked.user,id]})}
    
       else
        {setUsercheked({user:(usercheked.user).filter((el)=>el!==id)})
        e.target.checked=false
      }
    
    }
    const handelcheck=(e)=>{
      console.log(usercheked)
      console.log(e.target.checked)
        setCheck(!check)
        checkuser(e,e.target.checked,e.target.id)
        
        }
const handlesave=()=>{
 
  // dispatch(edittask(taskid,usersupdat)){()=>{setUsersupdat(usercheked)}}
//  const cd = (taskid,usersupdat)=> dispatch =>
//   setUsersupdat(usercheked)
 
//     .then(res => dispatch(edittask(taskid,res)))
//     //.then(() => cb()) // Do whatever you want here.
//     .catch(err => console.log(err))
if(usercheked.user.length>1){alert('you must choose one collaborator for each task ')}
else if(usercheked.user.length===0){alert('you must choose  a one collaborator for each task ')}
else{
dispatch(edittask(taskid,usercheked))

    handleload(load)
 handleClose()}
}




    return (
        <div>
          <img className="add_style" src={addgroup} alt='add icon' style={{width:"30px",cursor:"pointer"}} onClick={handleShow}/>
          
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task collaborator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {console.log(taskusers)}
        {taskusers?taskusers.map((el)=>{
        return(
 <InputGroup>
   
 {/* <FormControl  >  
   {/* < div style={{display:"flex",justifyContent:"space-around"}}>
 <h3>{el.firstName} {el.lastName} </h3> 
<h5>{el.profession}</h5> </div> */}
 {/* </FormControl> */} 


{((usercheked.user).includes(el._id )===true)? <InputGroup.Checkbox value={el._id}    id={el._id} type="checkbox"   onChange={handelcheck} checked />:
    
    <InputGroup.Checkbox  id={el._id} type="checkbox"  value={el._id} onChange={handelcheck}/>} <FormControl value={[el.firstName,  el.lastName 
    ,'  ' ,el.profession].join(' ') } >  
    {/* < div style={{display:"flex",justifyContent:"space-around"}}>
  <h3>{el.firstName} {el.lastName} </h3> 
 <h5>{el.profession}</h5> </div> */}
  </FormControl>
  </InputGroup>)}
            ):<h5>aucun project collaborators</h5>}
            
            
            
            
      
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Add_task_memb
