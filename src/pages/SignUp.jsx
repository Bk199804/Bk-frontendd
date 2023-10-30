import React,{useState}from 'react'
import{Container, Form , Button} from "react-bootstrap";
import '../Style/SignUp.css';
import {Link,useNavigate} from "react-router-dom";


 export const SignUp = () => {

  const[Formdata,setFormdata]=useState({
        name:"",
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
    <h1> Registration Form </h1>
      <Form onSubmit={handlesubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type ="text" name="name" value={Formdata.name} onChange={handlechange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type ="email" name="email" value={Formdata.email} onChange={handlechange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type ="password" name="password" value={Formdata.password} onChange={handlechange} required />
        </Form.Group>
        <Button variant="primary" type="sumbit">Register</Button>
        <p>Already have an account?</p><Link to ="Login">Login</Link>
          </Form>
    </Container>  
    );
};
 