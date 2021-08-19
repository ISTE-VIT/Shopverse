import React from 'react'
import img1 from  "./images/Group 160.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import img4 from "./images/bx_bx-qr.svg"
import {Image, Form, Row, Col, Container, InputGroup, Alert} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import "./HomeB.css"
import { useAuth } from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'
import SwitchExample from './Switch'


function HomeB() {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInS")
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
                    <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div> </Col>
                <Col>
                <div style={{ position:"absolute",left:"20%",top:"3.5%",height:"35px", width:"35px"}}>
                    <Link to ="/QR_Generation">
                    <Image src={img4} fluid/>
                    </Link>
                </div>
                <div style={{ position:"absolute",width:"300px",left:"25%", top:"3.5%"}}>
                    <Form>
                        <InputGroup>
                        {/* <InputGroup.Prepend> */}
                        <InputGroup.Text style={{backgroundColor:"white",borderColor:"black",borderRightColor:"white"}}>
                        <FeatherIcon icon="search"/>
                        </InputGroup.Text>
                        {/* </InputGroup.Prepend> */}
                        <Form.Control style={{borderColor:"black", borderLeftColor:"white"}} type="search" />
                        </InputGroup>
                    </Form>
                </div>
                <div style={{position:"absolute", left:"10%", top:"20%"}}>
                <SwitchExample/>
                </div>
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
    )
}

export default HomeB
