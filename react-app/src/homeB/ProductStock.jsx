import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'


export default function ProductStock() {
    return (
        <div>
            <Container>
                <div style={{position:"absolute",top:"50%", width:"1000px",height:"320px", overflowY:"scroll", overflowX:"hidden"}}>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34",top:"60%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34",top:"5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Order Id</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Customer Name</Card>
                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
