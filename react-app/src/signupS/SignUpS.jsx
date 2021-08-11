import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 157.svg"
import img2 from  "./images/Group 62.svg"
import img3 from "./images/LOGO.svg"
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


var SignUpS=()=> {


    return (
        <div>     
            <div style={{position:"absolute", width:"372.5px", height:"372.5px", right:"0%"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
            <Image src={img2} fluid/>
            </div>
            <Container>
            <Row>
            <Col xs={12} md={8}>
                <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#DD5A34"}}>Create an Account</h1>
                    <p className="lead">Let's get you all set up.</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                    <Form >

                    <Row>
                        <Col>
                        <Form.Control  id="email" type="email" placeholder="Email" required/> 
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control  id="phone-number" type="text" placeholder="Phone Number" />
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control  type="password" placeholder="Password" />
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control  type="password" placeholder="Confirm Password" />
                        <br/>
                        </Col>
                    </Row>
                    <div style={{textAlign:"left"}}>
                    <Button  type="submit" style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34"}}>Sign Up</Button>
                    <br/>
                    <br/>
                    Already have an account? click here to<Link to="/signInS"><Button variant="link" style={{color:"#DD5A34"}}>Sign In</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default SignUpS

