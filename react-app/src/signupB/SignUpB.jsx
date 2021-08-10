import React from 'react'
import { Image , Row, Col, Container, Form } from 'react-bootstrap'
import img1 from  "./images/Group 150 (1).svg"
import img2 from  "./images/Group 151.svg"
import img3 from "./images/LOGO.svg"
import { Jumbotron, Button, Alert} from 'react-bootstrap'
import { useRef , useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function SignUpB() {
    const emailRef=useRef();
    const phoneRef=useRef();
    const passwordRef=useRef();
    const confirmRef=useRef();
    const {signup}= useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== confirmRef.current.value) {
            return setError("Passwords do not match")
          }
        if (phoneRef.current.value.length<10) {
            return setError("Invalid phone number")
          }
        try {
            setError('')
            setLoading(true)
             await signup(emailRef.current.value, passwordRef.current.value )
             history.push("/thankYouB")
            
        } catch(error) {
            setError("Failed to create account")
            console.log(error)
        }
        setLoading(false)

    }


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
                    <Link to="/">
                    <Image src={img3} fluid/>
                    </Link>
                </div>
                <Jumbotron style={{position:"absolute",top:"20%", left:"10%",width:"500px", textAlign:"left"}}>
                    <h1 className="display-4" style={{color:"#5E54F1"}}>Create an Account</h1>
                    <p className="lead">Let's get you all set up.</p>
                </Jumbotron>
                <div style={{position:"absolute",top:"45%", left:"10%", width:"120vh"}}>
                    <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                        <Col>
                        <Form.Control ref={emailRef} id="email" type="email" placeholder="Email" required/> 
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control ref={phoneRef} id="phone-number" type="text" placeholder="Phone Number" />
                        <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        <br/>
                        </Col>
                        <Col>
                        <Form.Control ref={confirmRef} type="password" placeholder="Confirm Password" />
                        <br/>
                        </Col>
                    </Row>
                    <div style={{textAlign:"left"}}>
                    <Button disabled={loading} type="submit" style={{backgroundColor:"#5E54F1", borderColor:"#5E54F1"}}>Sign Up</Button>
                    <br/>
                    <br/>
                    Already have an account? click here to<Link to="/signInB"><Button variant="link" style={{color:"#5E54F1"}}>Sign In</Button></Link>
                    </div>
                    </Form>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}



