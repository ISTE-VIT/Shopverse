import React from 'react';
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react'
import { Card } from 'react-bootstrap';

const ProductCard = () => {
    const [quantity, setQuantity]=useState(0);
    const [select, setSelect]= useState(0)
    const [bgColor, setBgColor]=useState("white")
    const [icon, setIcon]=useState("")


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
            <Card style={{ backgroundColor:bgColor}}>
                <Card.Img onClick={Click} variant="top" src="https://wallpapercave.com/wp/wp1836700.jpg"  />
                <Card.Body style={{textAlign:"left"}}>
                    <Card.Title onClick={Click}>
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
        </div>
    );
}

export default ProductCard;
