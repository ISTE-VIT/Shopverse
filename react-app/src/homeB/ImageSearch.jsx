import React from 'react';
import img1 from  "./images/Group 164.svg"
import img2 from  "./images/Group 163.svg"
import img3 from "./images/LOGO.svg"
import {Image, Row, Col, Container, Alert, Card} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'
import {useAuth} from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { useState } from 'react'

const ImageSearch = () => {
    const { logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
    const [quantity, setQuantity]=useState(0);
    const [select, setSelect]= useState(0)
    const [bgColor, setBgColor]=useState("white")
    const [icon, setIcon]=useState("")


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/signInB")
        } catch {
          setError("Failed to log out")
        }
      }

      async function removeQuantity(){
          setQuantity(quantity-1)
          if(quantity<=0)
          {
              setQuantity(0)
          }
      }
      async function addQuantity(){
          setQuantity(quantity+1)
      }
      async function Click(){
          setSelect(1)
          if(select===1 )
          {
              setSelect(0)
          }
          if(quantity>0){
            setBgColor("#b5d6ff")
            setIcon("check-circle")
          }

          if(select===0&& quantity===0)
          {
              setBgColor("white")
              setIcon("")
          }
          else{
              setBgColor("#b5d6ff")
              setIcon("check-circle")
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
            </div> 
            </Col>
        </Row>
        </Container>
        <Container>
            <Row>
                <Col style={{position:"absolute",top:"30%"}}>
                <Card onClick={Click} style={{ width: '18rem', backgroundColor:bgColor}}>
                <Card.Img variant="top" src="https://wallpapercave.com/wp/wp1836700.jpg" />
                <Card.Body style={{textAlign:"left"}}>
                    <Card.Title>
                        <div>
                        Product Name
                        </div>
                        <div style={{textAlign:"right"}}>
                        <FeatherIcon icon={icon}/>
                        </div>
                    </Card.Title>
                    <Card.Text>
                    price
                    </Card.Text>
                    <Card.Footer style={{textAlign:"right"}}>
                        <FeatherIcon icon="minus" size="16px" onClick={removeQuantity}/>{' '}
                    {quantity}
                        <FeatherIcon icon="plus" size="16px" onClick={addQuantity}/>{' '}
                    </Card.Footer>
                </Card.Body>
                </Card>
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

export default ImageSearch;
