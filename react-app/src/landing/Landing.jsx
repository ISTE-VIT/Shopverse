import React from 'react'
import{ Row,Col,Container} from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap';
import './Landing.scss';
import img1 from './images/Group 6.svg'
import img2 from './images/LOGO.svg'
import img3 from './images/Group 101.svg'
import img4 from './images/image 3.svg'
import img5 from './images/Group 77.svg'
import FeatherIcons from 'feather-icons-react'

export default function Landing() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <div className="logo"style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                <Image src={img2} fluid/>
                </div>
                <Row>
                <div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Customers</h1>
                    <p className="lead">For those who wish to buy products from these stores safely.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button style={{backgroundColor:"#5E54F1"}}>Learn More</Button>
                    </p>
                </Jumbotron>
                </div>
                <div>
                <Jumbotron style={{position:"absolute", top:"75%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#F16B44"}}>Shops</h1>
                    <p className="lead">For shop owners, who wish to increase their sales and ensuring safe purchase of the products in their store.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button style={{backgroundColor:"#F16B44", borderColor:"#F16B44"}}>Get Started</Button>
                    </p>
                </Jumbotron>
                </div>
                </Row>
                </Col>
                <Col>
                <div style={{position:"absolute", left:"60.44%",width:"500px", height:"10px"}}>
                <Image src={img1} fluid/>
                </div>
                </Col>
            </Row>
            <Row>
                <Col style={{position:"absolute",top:"130%", width:"1000px", left:"10%"}}>
                <Jumbotron>
                        <h1 className="display-4">Who Are We</h1>
                        <p className="lead" style={{width:"40%",position:"absolute", left:"30%"}}>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                </Jumbotron>
                <div style={{position:"absolute",left:"-3.85%", top:"40%", width:"1175px", height:"1175px"}}>
                <Image src={img3} fluid/>
                </div>
                </Col>
                <Col xs={12} md={8}>
                <Jumbotron style={{position:"absolute", top:"230%", left:"10%",width:"800px", textAlign:"left"}}>
                    <h1 className="display-4" >Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <br/>
                    <FeatherIcons icon="instagram"/>{'  '}
                    <FeatherIcons icon="facebook" />{'   '}
                    <FeatherIcons icon="linkedin"/>{'   '}
                    <FeatherIcons icon="twitter" />{'   '}
                </Jumbotron>
                </Col>
                <Col xs={6} md={4}>
                    <div style={{position:"absolute", top:"230%",left:"75%"}}>
                    <Image src={img4} fluid/>
                    </div>
                </Col>
            </Row>
            </Container>
            <div style={{position:"absolute",top:"270%"}}>
            <Image src={img5} fluid/>
            </div>
        </div>
    )
}
