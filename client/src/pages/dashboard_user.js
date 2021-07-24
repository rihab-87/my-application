import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{Link}from'react-router-dom'
import { load } from '../actions/authactions'
import { loadalltask } from '../actions/taskactions'
import Navbar_user from '../components/navbar_user'
import { Doughnut, Pie ,Bar} from "react-chartjs-2";
import { loadproject } from '../actions/projectActions'
import idea from'../icons/idea .svg'
import project from'../icons/project.svg'
import checkcircle from'../icons/checkcircle.gif';
import dashboard_admin from '../style/dashboard_admin.css'

import icons8 from'../icons/icons8.gif'
import icons8tâches from'../icons/icons8tâches.gif'
import project1 from'../icons/project1.svg'
import Reveal from 'react-reveal/Reveal';
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
import { loaduser } from '../actions/useractions'
function Dashboard_user({id}) {
    const dispatch= useDispatch()
    useEffect(()=>{

dispatch(loaduser())
 dispatch(loadalltask())
dispatch(loadproject())

    },[])

    const user=useSelector(state=>state.user.usercoll)
    const tasks=useSelector(state=>state.task.taskdata)
    const projects=useSelector(state=>state.project.projectdata)
console.log(user)
console.log("tasks",tasks)
// nbr of projects 
const nbproj=projects?projects.filter((el)=>(el.user).includes(id)).length:null
console.log("nbproj",nbproj)

// nbre of tasks 
    var usertasks=tasks?tasks.filter((el)=>el.user===user._id):null
    const nbtasks=usertasks.length
    console.log("usertasks",usertasks)
    // chatrjs donuts
    //nb done task
var donetask=usertasks?usertasks.filter((el)=>el.status==="Done"):null
    var nbdone=donetask.length
    console.log('nbdone',nbdone)
    // % of done tasks 
    const percdone= Math.ceil((nbdone/nbtasks)*100)
console.log("percdone",percdone)
    
    // nb undone task
       var undonetask= usertasks?usertasks.filter((el)=>el.status==="Undone"):null
       var nbun= undonetask.length
       console.log('nbun',nbun)
      //  nb progtask
       var progtask=usertasks?usertasks.filter((el)=>el.status==="In progress"):null
       var nbprog= progtask.length
       console.log('nbprog',nbprog) 
       // % progress tasks 
       
const percprog= Math.ceil((nbprog/nbtasks)*100)


var da=[nbdone,nbprog,nbun]
console.log("da",da)
const chartdata = {
    labels: ["Done tasks", "In progress tasks", "Undone tasks"],
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
  //////////chartjs bar
  var daysnumber=(end )=>{
 
    var date1 = new Date(end)
    var date2 = new Date()
     console.log('date1',date1)
  console.log('date2',date2)
  var oneDay = 24 * 60 * 60 * 1000;
   return Math.ceil((date1.getTime() - date2.getTime()) / (oneDay));

   }
 
 // setTimeout(()=>{
 var days=progtask.map((el)=> el=daysnumber(el.endingDate))
 console.log('days',days)
 // },3000)
 
 var labs=progtask.map((el)=> el=el.taskName)


 const state = {
    labels: labs,
    datasets: [
      {
        label: 'Day',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: days
      }
    ]
  }

    return (
      <Container fluid >
       
      <Row style={{marginTop:"80px"}}>
        <Col lg="3" sm="6">
        <Pulse>
          <Card className="card-stats card_style" style={{height:"210px"}}>
            <Card.Body style={{display:"flex",justifyContent:"center"}} >
              <Row>
                <Row >
                  <div className="icon-big text-center icon-warning" style={{display:"flex",justifyContent:"center"}}>
                    <img src={icons8tâches} ali="usersicon" style={{width:"70px"}}></img>
                  </div>
                </Row>
                <Row xs="7">
                  <div className="numbers"  style={{display:"flex",justifyContent:"space-around",alignItems:"baseline"}}>
                    <p className=" card-category circ_style">{nbtasks}</p>
                    <Card.Title as="h4">Tasks</Card.Title>
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
                  <p className="card-category circ_style">{nbproj}</p>
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
                  <div className="numbers" style={{display:"flex",justifyContent:"space-around",alignItems:"baseline"}}>
                  <p className="card-category circ_style"> {`${percdone}%`}</p>
                  <Card.Title as="h4"> Done Tasks</Card.Title>
                   
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
                 
                  <p className="card-category circ_style" >{`${nbprog}%`}</p>
                  <Card.Title as="h4" > In progress Tasks</Card.Title>
                    
                    
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
        <Col md="8"style={{height:"600px"}} ><Pulse>
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
              <p>In progress Tasks</p> 
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
              <Card.Title as="h4">Tasks Statistics</Card.Title>
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
              <p> the total number of Tasks according to the number of Tasks with different status</p>
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




    )
}

export default Dashboard_user
