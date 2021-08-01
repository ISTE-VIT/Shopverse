import React from "react";
import QRCode from "react-qr-code";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './QR_generator.scss'
import Footer from "../footer";


export default function QR_generator() {
    return (
        <div>
            <Container >
                <Row>
                <Jumbotron>
                    <h1 className="display-4" style={{position:"relative", left:'1%', top:'9%'}}>QR CODE HAS BEEN GENERATED</h1>
                </Jumbotron> 
                <Col md="auto" className="qr"><QRCode value="hey" /></Col>
                </Row>
                <Row className="buttons">
                    <Col>
                    <Button variant="outline-primary"size="lg">
                    SHARE
                    </Button>{'\t'}
                    </Col>
                    <Col>      
                    <Button variant="primary" size="lg" style={{color:"white"}}>
                    SHARE
                    </Button>{' '}   
                   </Col>
                </Row>
            </Container>
                <div>                  
                <Footer/>
                </div>
        </div>
    )
}
