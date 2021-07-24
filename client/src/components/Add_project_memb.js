import React, { useState,useEffect } from 'react'
import {Button,FormControl,InputGroup,Modal,Alert} from'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { load_all_users } from '../actions/authactions';
import { addcollab, deletecollab, initcollab } from '../actions/collabActions';
import { editproject } from '../actions/projectActions';
import { edittask,loadtask } from '../actions/taskactions';
import addmemb from '../style/addmemb.css'
function Add_project_memb({projectusers,projectid,handleload,load}) {

    const dispatch = useDispatch();
    const [collcheked, setCollcheked] = useState({user:projectusers});
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);
    
    useEffect(() => {
       
        dispatch(load_all_users())
        dispatch(loadtask(projectid))
        }, [dispatch ])

  
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);
   
    const allusers=useSelector(state=>state.auth.userdata)
    const tasks=useSelector(state=>state.task.taskdata)
console.log(tasks)

    const checkuser=(e,check,id)=>{
        
         const usertask=projectusers.includes(id) 
         const checktask=tasks.filter((task)=>task.user._id===id)
         
        console.log(checktask )
        
        if(check){setCollcheked({user:[...collcheked.user,id]})
         
        }
       else if(!check) {
        if(checktask.length && usertask){ alert('Before deleting a collaborator from a project you must discharge him from his tasks')}
       else 
        {
            console.log('à effacer')
           
            setCollcheked({user:(collcheked.user).filter((el)=>  el!==id )})
            e.target.checked=false
    }
       }
    
    }
    const handelcheck=(e)=>{
        setCheck(!check)
        // console.log(e.target.checked)
        checkuser(e,e.target.checked,e.target.id)
        console.log(collcheked)
        
        }

        const handlesave=()=>{

            dispatch(editproject(projectid,collcheked))

            handleload(load)
          handleClose()}
          






    return (
        <div>
         
                  <img className="add_style" src='add-group.svg' alt='add icon' style={{width:"30px",cursor:"pointer"}} onClick={handleShow}/>
       
      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Edit projects collaborators</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            
        {allusers.length?allusers.map((el)=>


<InputGroup>

{(projectusers.includes(el._id)&&(collcheked.user).includes(el._id))?  <InputGroup.Checkbox value={el._id}    id={el._id} type="checkbox"   onChange={handelcheck} checked />:
    
    <InputGroup.Checkbox  id={el._id} type="checkbox"  value={el._id} onChange={handelcheck}/>} <FormControl value={[el.firstName,  el.lastName 
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
          <Button variant="primary" onClick={handlesave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default Add_project_memb
