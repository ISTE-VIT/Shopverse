import React from 'react'
import { Row, Col, Container, Jumbotron, Image, Button} from 'react-bootstrap'
import './ThankYouS.scss'
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
            <Jumbotron>
                    <h1 className="display-2">THANK YOU</h1>
                    <h3 className="display-6">FOR SIGNING UP</h3>
                    <hr className="my-2" />
                    <p className="lead">
                        <Button  variant="link" className="b2h">Back to homepage</Button>
                    </p>
                </Jumbotron>  

            </div>
            </>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
