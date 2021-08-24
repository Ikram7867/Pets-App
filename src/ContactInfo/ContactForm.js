import React ,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../Widget/LoginForm.css";
export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    areaCode:"",
    contact : "",
    email:"",
    userName:"",
    password:"",
    confirmPassword:""
  })
  const [validated, setValidated] = useState(false);
  const [record , setRecord]= useState([]);
  const handleInput=(e)=>{
    const name = e.target.name;
    const value= e.target.vlaue;
    setContactInfo({...contactInfo,[name]:value});
    // console.log(e.traget.vlaue);
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }else{
      event.preventDefault();
      const newRecord ={...contactInfo}
      setRecord({...record,newRecord})
      console.log(record);
      moveNext()
    }
    
  };

  const history=useHistory();
  const moveNext=()=>{
    history.push("/ImageSign")
  }
  const moveBack=()=>{
      history.goBack()
  }
  return (
    <div className="login_form">
      <div className="sign_in">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
            <Form.Control 
            type="text"
            autoComplete="off" 
            value={contactInfo.areaCode} 
            name="areaCode"
            onChange={handleInput} 
            placeholder="Area Code" required/>
            <Form.Control 
            type="text"
            autoComplete="off" 
            value={contactInfo.contact} 
            name="contact"
            onChange={handleInput} 
            minLength="11"
            placeholder="Phone Number" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="email"
            autoComplete="off" 
            value={contactInfo.email} 
            name="email"
            onChange={handleInput} 
            placeholder="Email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
            type="text"
            autoComplete="off" 
            value={contactInfo.userName} 
            name="userName"
            onChange={handleInput} 
            placeholder="User Name" 
            minLength="8"
            required/>
          </Form.Group>
          <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
            <Form.Control 
            type="password"
            autoComplete="off" 
            value={contactInfo.password} 
            name="password"
            onChange={handleInput} 
            placeholder="Password" 
            minLength="8"
            required/>
            <Form.Control 
            type="password"
            autoComplete="off" 
            value={contactInfo.ConfirmPassword} 
            name="confirmPassword"
            onChange={handleInput} 
            placeholder="ConfirmPassword" 
            minLength="8"
            required/>
          </Form.Group>
          <div className="login_with">
          <Button variant="primary" type="submit" className="login_btn" onClick={moveNext} >
            Next
          </Button>
          <Button variant="primary" type="submit" className="login_btn blue_bg" onClick={moveBack}>
            Cancel
          </Button>
        </div>
        </Form>
        
      </div>
    </div>
  );
}
