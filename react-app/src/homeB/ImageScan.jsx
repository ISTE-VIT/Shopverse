import React from 'react';
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import {Image, Row, Col, Container, Alert} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'
import Camera from './Camera';

const ImageScan = () => {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInB")
        } catch {
          setError("Failed to log out")
        }
      }
    return (
        <div>
            <Container>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
                <Col>      
                <h1 style={{position:"absolute", top:"10%", textAlign:"center", left:"45%"}}>
                    Scan Product
                </h1>  
                    <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div> 
                </Col>
            </Row>
            <Row>
                <Col>
                <Camera/>
                </Col>
            </Row>
            </Container>
            <div style={{position:"absolute", width:"144px", height:"144px", right:"0%", top:"0"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
            <Image src={img2} fluid/>
            </div>        
                <div  onClick={handleLogout} style={{position:"absolute",width:"50px", height:"50px",color:"white", top:"3%",right:"3%"}}>
                    <FeatherIcon  icon="log-out"/>
                </div>            
        </div>
    );
}

export default ImageScan;
