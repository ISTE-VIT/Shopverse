import React from 'react'
import{ Row,Col,Container} from 'react-bootstrap'
import { Jumbotron, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.scss';
import img1 from './images/Group 6.svg'

export default function Landing() {
    return (
        <div>
            <Container>
            <Row>
                <Col className="get_started">
                <Jumbotron style={{textAlign:"left", width:"400px",position:"absolute", left:"10%",top:"50%"}}>
                    <h1 className="display-5" style={{color:"#F16B44"}}>Customers</h1>
                    <p className="lead">For those who wish to buy products from these  stores  safely.  </p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button color="primary" style={{color:"white"}}>Get Started</Button>
                    </p>
                </Jumbotron>
                <br/>
                <Jumbotron style={{textAlign:"left",width:"400px", position:"absolute",left:"10%", top:"1200%"}}>
                    <h1 className="display-5"style={{color:"#5E54F1"}}>Shops</h1>
                    <p className="lead">For shop owners, who wish to increase their sales and ensuring safe purchase of the products in their store.</p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Button color="secondary" style={{color:"white"}}>Get Started</Button>
                    </p>
                </Jumbotron>

                
                </Col>
                <Col>
                <Image src={img1} fluid className="grp6" />
                </Col>
            </Row>
            </Container>         
        </div>
    )
}
