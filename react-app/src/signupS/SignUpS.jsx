import React from 'react'
import { Row, Col, Container, Form, Image, Button } from 'react-bootstrap'
import './SignUpS.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/Saly-1.svg'
import img2 from './images/Ellipse 22.svg'

export default function SignUpS() {
    return (
        <div>
        <Container>
        <Row>
            <Col>
            <Image src={img2} className="ellipse" fluid />
            <Image src={img1} className="s1" fluid/>
            
            </Col>
            <Col>
            <>
            <div className="details">
                <Form.Control type="email" variant="outlined-primary" placeholder="EMAIL" style={{width:"80%"}} />
                <br />
                <Form.Control type="text" placeholder="ADDRESS" style={{width:"80%"}}/>
                <br />
                <Form.Control type="text" placeholder="PHONE NUMBER" style={{width:"80%"}}/>
                <br />
                <Form.Control type="password" placeholder="PASSWORD" style={{width:"80%"}}/>
                <br />
                <Form.Control type="password" placeholder="CONFIRM PASSWORD" style={{width:"80%"}}/>
                <br />
                <Form.Control type="text" placeholder="OTP" style={{width:"80%"}}/>
                <br />
                <Button variant="link" className="b1" >RESEND OTP</Button>
                <div>
                <Button variant="outline-primary" className="b3" >SIGN IN</Button>
                <Button variant="primary" className="b2" style={{color:"white"}} >SIGN UP</Button>
                </div>
            </div>
            </>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
