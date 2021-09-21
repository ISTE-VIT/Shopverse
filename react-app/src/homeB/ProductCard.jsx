import React from 'react';
import { useState,
     useEffect
    } from 'react';
import FeatherIcon from 'feather-icons-react'
import { Card,
    //  Container, Row, Col
    } from 'react-bootstrap';
import cookie from 'react-cookies'
import axios from 'axios';

const ProductCard = () => {
    const [quantity, setQuantity]=useState(0);
    const [select, setSelect]= useState(0)
    const [bgColor, setBgColor]=useState("white")
    const [icon, setIcon]=useState("")
    const [data, setData] = useState([])
    let shopID=cookie.load("shopID")

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/productList/${shopID}`).then((response)=>{
            setData(response.data)
        })
    },[shopID])
    console.log(data)


      async function Click(){
          setSelect(1)
          if(quantity===0&&select===0)
          {
              setBgColor("white")
              setIcon("")
            }
            else
            {
                setBgColor("#b5d6ff")
                setIcon("check-circle")
                setQuantity(1)
            }
            if(select===1)
            {
                setSelect(0)
            }
            
        }
        async function removeQuantity(){
            setQuantity(quantity-1)
            if(quantity<=1)
            {
                setQuantity(0)
                setBgColor("white")
                setIcon("")
            }
        }
        async function addQuantity(){
            setQuantity(quantity+1)
            if(quantity>=0)
            {
                setBgColor("#b5d6ff")
                setIcon("check-circle")
            }
        }

    return (
        <div>
        {/* {data.map(data => */}
        {/* <Container>
            <Row style={{width:"200px"}}>
                <Col style={{width:"200px", height:"300px"}}> */}
                    <Card style={{ backgroundColor:bgColor}}>
                        <Card.Img onClick={Click} variant="top" src="https://wallpapercave.com/wp/wp1836700.jpg"  />
                        <Card.Body style={{textAlign:"left"}}>
                            <Card.Title onClick={Click}>
                                <div>
                                {cookie.load("name")}                               
                                </div>
                                <div style={{textAlign:"right"}}>
                                <FeatherIcon icon={icon}/>
                                </div>
                            </Card.Title>
                            <Card.Text>
                            {cookie.load("price")}  
                            </Card.Text>
                            <Card.Footer style={{textAlign:"right"}}>
                                <FeatherIcon icon="minus" size="16px" onClick={removeQuantity}/>{' '}
                            {quantity}
                                <FeatherIcon icon="plus" size="16px" onClick={addQuantity}/>{' '}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                {/* </Col>
            </Row>
        </Container> */}
        {/* )} */}
        </div>
    );
}

export default ProductCard;
