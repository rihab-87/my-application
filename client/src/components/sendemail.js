

import React,{useState} from 'react';

import { send } from 'emailjs-com';
import{Form,Modal} from 'react-bootstrap'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load_all_users } from '../actions/authactions';
import {Button} from'antd'

function Sendemail({id}) {

    const dispatch=useDispatch()

useEffect(()=>{
dispatch(load_all_users())

},[])

const users=useSelector(state=>state.auth.userdata)

const collab=users.length?users.find((el)=>el._id===id):null
console.log('collab',collab)

 
console.log( "userid",id)
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: ''
  });

console.log("send",toSend)

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onFocus=(e)=>{
e.target.value=collab.firstName
setToSend({ ...toSend, to_name: e.target.value });
  }

  const onFocusmail=(e)=>{
    e.target.value=collab.email
    setToSend({ ...toSend, reply_to: e.target.value });
  }
const onblur=(e)=>{
  e.target.value=collab.firstName
}
const onblure=(e)=>{
  e.target.value=collab.email
}

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_b67t9hl',
      'template_yy1k638',
      toSend,
      'user_wsoh08CCcbxpYh00jZy77'
    )
      .then((response) => {
        alert('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        alert('FAILED...', err);
      });
      e.target.reset()
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<div>

  <Button  style={{marginLeft:"50px"}} variant="outline-primary" onClick={handleShow} style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100px" , height:"40px", boxShadow: "0px 1px 10px 1px",marginLeft:"50px" ,marginBottom:"30px"}}>
        send email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sending Email </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={onSubmit}>
         
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>From</Form.Label>
  <Form.Control  name='from_name'placeholder='from name' value={toSend.from_name} onChange={handleChange} />
  <Form.Label>To</Form.Label>
  <Form.Control  name='to_name' placeholder='to name'  value={toSend.to_name}   onFocus={onFocus} onChange={handleChange} onBlur={onblur} />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name='reply_to' value={toSend.reply_to}  onFocus={onFocusmail} onBlur={onblure}
    onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3}  name='message'placeholder='Your message'value={toSend.message} onChange={handleChange}/>
  </Form.Group>
  <Button type='submit' variant="primary" style={{display:"flex",justifyContent:"center", alignItems:"center", width:"100px" , height:"40px", boxShadow: "0px 1px 10px 1px",marginLeft:"350px" }}>confirm</Button>
</Form>





   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>











</div>
   


  )
};

export default Sendemail;
