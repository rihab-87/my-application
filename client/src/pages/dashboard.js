import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load, load_all_users} from '../actions/authactions'
import NavBar from '../components/navBar'
import{Link}from'react-router-dom'
 import dash from '../style/dash.css'
import { Doughnut, Pie ,Bar,Line} from "react-chartjs-2";
import  {chartColors}  from "../components/color";
import { loadproject } from '../actions/projectActions'
import dashboard_admin from '../style/dashboard_admin.css'
import collaboration from'../icons/collaboration.svg'
import project1 from'../icons/project1.svg'
import checkcircle from'../icons/checkcircle.gif';

import icons8 from'../icons/icons8.gif'
import Pulse from 'react-reveal/Pulse';

import {Container,Row,Col, Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Form,
  OverlayTrigger,
  Tooltip,} from 'react-bootstrap'
import moment from 'moment';
// import ChartistGraph from 'react-chartist';
// import Chatist from '../components/chatist'
function Dashboard() {
  moment().format();
   const dispatch= useDispatch()
    useEffect(()=>{

dispatch(load_all_users())
dispatch(loadproject())

    },[])
    const users=useSelector(state=>state.auth.userdata)
    console.log(users)
    // nbre of collab
 const collabnb=users?users.length:0
 console.log(collabnb)

 const projectdata = JSON.parse(localStorage.getItem('allproject'))
    //  const projectdata=useSelector(state=>state.project.projectdata)
    console.log('projectdata',projectdata)
    // nbre of projects 
    const projectnb=projectdata?projectdata.length:0
   const doneproj=projectdata?projectdata.filter((el)=>el.status==="Done"):null
const nbdone=doneproj.length
console.log('nbdoen',nbdone)
// %done projeects
const percdone= Math.ceil((nbdone/projectnb)*100)
console.log("percdone",percdone)
   const undoneproj=projectdata?projectdata.filter((el)=>el.status==="Undone"):null
   const nbun= undoneproj.length
   console.log('nbun',nbun)
   const progproj=projectdata?projectdata.filter((el)=>el.status==="In progress"):null
   const nbprog= progproj.length
   console.log('nbprog',nbprog)
//% progress project 
const percprog= Math.ceil((nbprog/projectnb)*100)



const da=[ nbdone,nbprog, nbun]
console.log("da",da)
////////////////////////////////
//
var daysnumber=(end )=>{
 
   
   var date1 = new Date(end)
   var date2 = new Date()
    console.log('date1',date1)
 console.log('date2',date2)
 var oneDay = 24 * 60 * 60 * 1000;
  return Math.ceil((date1.getTime() - date2.getTime()) / (oneDay));

  }

// setTimeout(()=>{
var days=progproj.map((el)=> el=daysnumber(el.endingDate))
console.log('days',days)
// },3000)

var labs=progproj.map((el)=> el=el.projectName)

const chartdata = {
  labels: ["Done", "In progress", "Undone"],
  datasets: [
    {
      label: "Markets Monitored",
      backgroundColor: [
        "#83ce83",
        "#edb84d",
        "#f96a5d",
        "#00A6B4",
        "#6800B4",
      ],
      data: da,
    },
  ],
};

const state = {
  labels: labs,
  datasets: [
    {
      label: 'Day',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
    
      grouped:false,
      data: days
 
      
    }
  ]
}


    

    return (
<>

<Container fluid >
        <Row style={{marginTop:"80px"}}>
          <Col lg="3" sm="6">
            <Pulse>
            <Card className="card-stats card_style" style={{height:"210px"}}>
              <Card.Body style={{display:"flex",justifyContent:"center"}} >
                <Row>
                  <Row >
                    <div className="icon-big text-center icon-warning" style={{display:"flex",justifyContent:"center"}}>
                      <img src={collaboration} ali="usersicon" style={{width:"70px"}}></img>
                    </div>
                  </Row>
                  <Row xs="7">
                    <div className="numbers"  style={{display:"flex",justifyContent:"space-around",alignItems:"baseline"}}>
                      <p className=" card-category circ_style">{collabnb}</p>
                      <Card.Title as="h4">Collaborators</Card.Title>
                    </div>
                  </Row>
                </Row>
                
              </Card.Body>
              <Card.Footer>
                
                <div className="stats">
                
                  Update Now
                </div>
              </Card.Footer>
            </Card>
            </Pulse>
          </Col>
          <Col lg="3" sm="6">
            <Pulse>
            <Card className="card-stats card_style" style={{height:"210px"}}>
              <Card.Body  style={{display:"flex",justifyContent:"center"}} >
                <Row>
                  <Row >
                    <div className="icon-big text-center icon-warning" style={{display:"flex",justifyContent:"center"}}>
                      <img src={project1} alt="projecticon" style={{width:"70px"}}></img>
                    </div>
                  </Row>
                  <Row xs="7">
                    <div className="numbers" style={{display:"flex",justifyContent:"space-around",alignItems:"baseline"}}>
                    <p className="card-category circ_style">{projectnb}</p>
                      <Card.Title as="h4">Projects</Card.Title>
                      
                    </div>
                  </Row>
                </Row>
              </Card.Body>
              <Card.Footer>
                
                <div className="stats">
                
                  Update Now
                </div>
              </Card.Footer>
            </Card>
            </Pulse>
          </Col>
          <Col lg="3" sm="6">
            <Pulse>
            <Card className="card-stats card_style" style={{height:"210px"}}>
              <Card.Body style={{display:"flex",justifyContent:"center"}} >
                <Row>
                  <Row >
                    <div className="icon-big text-center icon-warning"  style={{display:"flex",justifyContent:"center"}}>
                      <img src={checkcircle} alt="doneicon" style={{width:"70px",height:"70px"}}></img>
                    </div>
                  </Row>
                  <Row xs="7">
                    <div className="numbers" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                    <p className="card-category circ_style"> {`${percdone}%`}</p>
                    <Card.Title as="h4"> Done Projects</Card.Title>
                     
                    </div>
                  </Row>
                </Row>
              </Card.Body>
              <Card.Footer>
                
                <div className="stats">
                 
                  Update Now
                </div>
              </Card.Footer>
            </Card>
            </Pulse>
          </Col>
          <Col lg="3" sm="6">
            <Pulse>
            <Card className="card-stats card_style"  style={{height:"210px"}}>
              <Card.Body style={{display:"flex",justifyContent:"center"}} >
                <Row>
                  <Row>
                    <div className="icon-big text-center icon-warning"  style={{display:"flex",justifyContent:"center"}}>
                      <img   src={icons8} alt="prog icon" style={{display:"flex",justifyContent:"center", width:"70px"}}/>
                    </div>
                  </Row>
                  <Row xs="7">
                    <div className="numbers" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                   
                    <p className="card-category circ_style" style={{marginTop:"20px"}}>{`${percprog}%`}</p>
                    <Card.Title as="h4"style={{marginTop:"20px",fontSize:"22px"}}> In progress projects</Card.Title>
                      
                      
                    </div>
                  </Row>
                </Row>
              </Card.Body>
              <Card.Footer>
                
                <div className="stats">
                
                  Update Now
                </div>
              </Card.Footer>
            </Card>
            </Pulse>
          </Col>
        </Row>
        <Row style={{marginTop:"50px", height:"100vh"}}>
          <Col md="8"style={{height:"600px"}} >
            <Pulse>
            <Card className="card_style" style={{height:"500px"}} >
              <Card.Header>
                <Card.Title as="h4">number of days remaining before deadline</Card.Title>
                <p className="card-category">Days before deadline</p>
              </Card.Header>
              <Card.Body >
                <div className="ct-chart" id="chartHours">
                <Bar
          data={state}
          style={{height:"250px",width:"528px"}}
          options={{
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
                </div>
              
              
                <div className="legend">
                <p>In progress projects</p> 
                </div>
                {/* <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  numbers of remainig days from now
                </div> */}
                </Card.Body>
                <Card.Footer>
                
                <div className="stats">
                 
                 <p> numbers of remainig days from now</p> 
                </div>
              </Card.Footer>
            </Card >
            </Pulse>
          </Col>
          <Col md="4"style={{height:"595px"}}>
            <Pulse>
            <Card className="card_style" style={{height:"500px"}}>
              <Card.Header>
                <Card.Title as="h4">Project Statistics</Card.Title>
                <p className="card-category">Last work Performance</p>
              </Card.Header>
              <Card.Body style={{height:"400px"}}>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                 <Doughnut
        data={chartdata}
        style={{height:"250px",width:"235px"}}
       
        options={{
          legend: { display: true, position: "right" },
           maintainAspectRatio: false,
          datalabels: {
            display: true,
            color: "white",
          },
          tooltips: {
            backgroundColor: "#5a6e7f",
          },
        }}
      />
                </div>
               
                <div className="legend">
                <p> the total number of projects according to the number of projects with different status</p>
                </div>
               
              </Card.Body>
              <Card.Footer >
                
                <div className="stats">
                
                 <p> Update Now</p> 
                </div>
              </Card.Footer>
            </Card>
            </Pulse>
          </Col>
        </Row>
        






</Container>
</>
    )
}

export default Dashboard
