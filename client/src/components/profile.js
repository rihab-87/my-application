import React from 'react'
import webb from "../icons/web.jpg";
import "../style/profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Alert } from "react-bootstrap";
import imgprofile from'../icons/imgprofile.jpg'

function profile({name,lname,profession,Skills,avatar}) {
//in line style
  const stylename={ color:"#8d108d",fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "x-large",fontWeight:700}
  const styleprofession={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "large",fontWeight:700}
  const stylebio={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "small",fontWeight:400,textAlign:"center"}
  
  return (
    <div>
      <div className="img_container">
        <div className="img_profile">
       <img src={avatar}  alt="img"/>
        </div>
      </div>
      <div className="name_container">
        <h1 style={stylename}>{name}</h1>
        <h3 style={styleprofession}>{profession}</h3>
        <p style={stylebio}>{Skills}</p>
      </div>

      <div>
        {/* <Button variant="outline-secondary" onClick={props.alert}>
          View Profil
        </Button> */}
      </div>
    </div>
  );
}
export default profile;

