import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_all_users } from '../actions/authactions'
import imgprofile from '../icons/imgprofile.jpg'
import Profile from '../components/profile'
import ADDcollab from'../components/addcollab'
import {Container,Row,Col,Button} from 'react-bootstrap'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter,numberFilter } from 'react-bootstrap-table2-filter';
import { loadproject } from '../actions/projectActions'
import { loadalltask } from '../actions/taskactions'
import Delete_collab from '../components/delete_collab'
import collaboration from'../icons/collaboration.svg'
import Avatar from '@material-ui/core/Avatar';

function Collabpage() {

const dispatch=useDispatch()
useEffect(()=>{
    dispatch(load_all_users())
    dispatch(loadproject())
    dispatch(loadalltask())
},[])
 const users=useSelector(state=>state.auth.userdata)
const projects=useSelector(state=>state.project.projectdata)
const tasks=useSelector(state=>state.task.taskdata)
console.log(users)

function avatarFormatter(cell, row) {

      return (
        <Avatar  src={ cell}  alt="avatar" style={{width:"50px", height:"50px",textAlign:"center"}} />
      )   
  }
  function deleteFormatter(cell, row) {

    return (
       <Delete_collab id={cell} /> 
    )   
}




const projnb=(id)=>{
  return projects.length?projects.filter((el)=>el.user.includes(id)).length:null
//console.log("projnb",nb)
}
const tasknb=(id)=>{
  return  tasks?tasks.filter((el)=>el.user===id).length:null
  //console.log("tb",tb)
}

const upusers=users?users.map((el)=>el={...el,nbp:projnb(el._id),nbt:tasknb(el._id)}):null

console.log("upusers",upusers)


const columns=[{

    dataField: 'avatar',
    text: 'Profile Photo',
    headerStyle: {
     overflowWrap:"break-word",
     textAlign:"center"
      
    },
    formatter: avatarFormatter
  },

{
    dataField: 'firstName',
  text: 'First name',
  headerStyle: {
   overflowWrap:"break-word",
   textAlign:"center"
    
  },

  filter: textFilter()
},
{
    dataField: 'lastName',
  text:  "Last Name",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
   
  },
  filter: textFilter()
},
{
    dataField: 'email',
  text:  "email",
  headerStyle: {
   overflowWrap:"break-word",
   textAlign:"center"
    
  },
  filter: textFilter()
},
{
    dataField: 'profession',
  text:  "Profession",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
     
   },
   filter: textFilter()

},
{
    dataField: 'Skills',
  text:  "Skills",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
     
   },
   filter: textFilter(),
   headerTitle: true

},
{
    dataField: 'linkedin',
  text:  "Linkedin",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
     
   },
   filter: textFilter()
},
{
    dataField: 'github',
  text:  "Github",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
     
   },
   filter: textFilter({
    
      headerTitle :false
    
  })
},
{
    dataField: 'phone',
  text:  "Phone",
  headerStyle: {
    overflowWrap:"break-word",
    textAlign:"center"
     
   },
   filter: numberFilter()
},
{
  dataField: 'nbp',
text:  "projects number",
headerStyle: {
  overflowWrap:"break-word",
  textAlign:"center"
   
 },
 filter: numberFilter()
},
{
  dataField: 'nbt',
text:  "tasks number",
headerStyle: {
  overflowWrap:"break-word",
  textAlign:"center"
   
 },
 filter: numberFilter()
},

{

  dataField: '_id',
  text: 'Delete',

  formatter: deleteFormatter
}


]

const rowStyle2 = (row, rowIndex) => {
    const style = {};

   style.overflowWrap="break-word";
   style.textAlign="center";
   style.fontWeight = 'bold';

    // if (row.id > 3) {
    //   style.backgroundColor = '#c8e6c9';
    // } else {
    //   style.backgroundColor = '#00BFFF';
    // }
  
    // if (rowIndex > 2) {
    //   style.fontWeight = 'bold';
    //   style.color = 'white';
    // }
  
    return style;
  };
  function filFormatter(column, colIndex, {  filterElement }) {
    return (
      <div style={ { display: 'flex', flexDirection: 'column' } }>
      
       
        {  filterElement}
       
      </div>
    );
  }



    return (
        <div>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"50px"}}><img src={collaboration} alt="icon" style={{width:"50px"}}/> <h3> COLLABORATORS </h3></div>
          {/* <ADDcollab/> */}
          <Container >


          <BootstrapTable keyField='id' data={ upusers } columns={ columns } rowStyle={ rowStyle2 }  filter={ filterFactory() }/> 


       
















              {/* <Row>
         {users?users.map((el)=>{ 
             return (
            <Col>    
       <img src={el.avatar} alt="webpage" style={{width:"50px"}}  />
         <div className="profile">
         <Profile name={el.firstName}  lname={el.lastName} profession={el.profession}  Skills={el.Skills} avatar={el.avatar}>
         <img src={el.avatar} alt="webpage"  /> 
         </Profile>
         </div> 
         </Col> 
         
        )}):null} </Row> */}

          </Container>
        </div>
    )
}

export default Collabpage
