import React,{useState}from 'react'
import{Container, Form , Button} from "react-bootstrap";
import '../Style/Login.css';
import {Link,useNavigate} from "react-router-dom";

export const Login = () => {
    const[Formdata,setFormdata]=useState({
         email:"",
         password:""
  });
  const handlechange = (e) => {
    const{name,value}=e.target
    setFormdata({...Formdata,
         [name]:value})
 }
  const handlesubmit =(e)=>{
       e.preventDefault();
    console.log(Formdata);
  }
  
  return (
    <Container>
    <h1> Login </h1>
      <Form onsubmit={handlesubmit}>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type ="email" name="email" value={Formdata.email} onChange={handlechange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type ="password" name="password" value={Formdata.password} onChange={handlechange} required />
        </Form.Group>
        <Button variant="primary" type="sumbit">Login</Button>
            
        </Form>
    </Container>  
  )
}
