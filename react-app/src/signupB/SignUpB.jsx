import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 150 (1).svg"
import img2 from  "./images/Group 151.svg"
import img3 from "./images/LOGO.svg"
import { Jumbotron, Button} from 'react-bootstrap'

export default function SignUpB() {
    return (
        <div>     
            <div style={{position:"absolute", width:"294px", height:"294px", right:"0%"}}>
            <Image src={img1} fluid/>
            </div>
            <div style={{position:"absolute", bottom:"0",width:"200px",  left:"0%"}}>
            <Image src={img2} fluid/>
            </div>
            <Container>
            <Row>
            <Col xs={12} md={8}>
                <div  style={{position:"absolute", width:"150px", height:"10px",left:"5%"}}>
                <Image src={img3} fluid/>
                </div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Create an Account</h1>
                    <p className="lead">Let's get you all set up.</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                <Row>
                    <Col>
                    <Form.Control variant="secondary" type="text" placeholder="Name" /> 
                    <br/>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="Phone Number" />
                    <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control type="text" placeholder="Password" />
                    <br/>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="Confirm Password" />
                    <br/>
                    </Col>
                </Row>
                <div style={{textAlign:"left"}}>
                <Button style={{backgroundColor:"#5E54F1", borderColor:"#5E54F1"}}>Primary</Button>
                <br/>
                <br/>
                Already have an account? click here to<Button variant="link" style={{color:"#5E54F1"}}>Sign In</Button>
                </div>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}



// const [auth, setAuth] = useState(false|| window.localStorage.getItem('auth') === 'true');
// const [token,setToken] = useState('');

//   useEffect(()=>
//   {
//     firebase.auth().onAuthStateChanged((userCred)=>{
//       if(userCred)
//       {
//         setAuth(true)
//         window.localStorage.setItem('auth','true')
//         userCred.getIdToken().then((token)=>{
//           setToken(token)
//         })
//       }
//       console.log(userCred)
//     })
//   });

//   var provider = new firebase.auth.GoogleAuthProvider();

//   const loginWithGoogle = ()=>{
//     firebase.auth().signInWithPopup(provider).then((userCred)=>{
//       if(userCred)
//       {
//         setAuth(true)
//       }
//       console.log(userCred)
//     });
 
// };