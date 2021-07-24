import React, { useState } from 'react'
import {Modal,Button,Form }from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addcollab } from '../actions/authactions';
function Addcollab() {
    const [show, setShow] = useState(false);
const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newcollab, setNewcollab] = useState(
        
        { firstName:"",
    lastName :"",
    email:"",
    isadded:false,
     profession:"",
    Skills:"",
    linkedin:"",
    github:"",
    phone:0,
    password:"",
    passwordConfirmation:"",
    isadmin:false
}
    );
    
    const handleChange = (e) => {
        setNewcollab ({ ...newcollab, [e.target.name]: e.target.value });
      };    

const handleclick=()=>{
    setNewcollab ({ ...newcollab, isadded: true });
}

const handlesave=()=>{
dispatch(addcollab(newcollab))
handleClose()




}



    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
       Add collaborators
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add collaborators</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>From</Form.Label>
  <Form.Control  name='firstName'placeholder=' firstname'  onChange={handleChange} />
  <Form.Label>To</Form.Label>
  <Form.Control  name='lastName' placeholder='lastname'    onChange={handleChange}  />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name='email' 
    onChange={handleChange}/>
  </Form.Group>
  <Button onClick={handleclick}>valider</Button>
 

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

export default Addcollab
