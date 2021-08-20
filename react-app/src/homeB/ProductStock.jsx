import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ProductStock() {
    return (
        <div>
            <Container>
                <div style={{position:"absolute",top:"50%", width:"1000px",height:"240px", overflowY:"scroll", overflowX:"hidden"}}>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Product Name</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Quantity</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"60%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Product Name</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Quantity</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Product Name</Card>
                        <br/>
                        </Col>
                        <Col >
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Quantity</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Product Name</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Quantity</Card>                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"500px", borderWidth:"1.5px"}} body>Product Name</Card>
                        <br/>
                        </Col>
                        <Col>
                        <Card style={{borderColor:"#DD5A34",width:"300px",borderWidth:"1.5px"}} body>Quantity</Card>
                        <br/>
                        </Col>
                        <br/>
                        <Col>
                        <Button size="lg"style={{backgroundColor:"#DD5A34",borderRadius:"10px", borderColor:"#DD5A34",top:"1.5%"}}>Update</Button>                        <br/>
                        </Col>
                        <br/>
                    </Row>
                </div>
                <Row>
                <Col style={{position:"absolute",top:"250px"}}>
                    <Link to ="/Add_Item">            
                    <Button  style={{backgroundColor:"#ffe5dd",borderColor:"#DD5A34",color:"#DD5A34",borderWidth:"1.5px",width:"200px", borderRadius:"10px"}}>Add New</Button>
                    </Link>
                </Col>
                </Row>
            </Container>
        </div>
    )
}
