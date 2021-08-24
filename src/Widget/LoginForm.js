import React , {useState} from 'react';
import './LoginForm.css';
import { useHistory } from 'react-router-dom';
import { Form ,Button } from 'react-bootstrap'
export default function  

LoginForm() {
    
     const [UseReg, setUseReg] = useState({
         email: "",
         password: ""
     });
     const [record, setRecord] = useState([])
     const [validated, setValidated] = useState(false);
     
     const handleIput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setUseReg({...UseReg,[name] : value})
        // console.log(event.target.value)
     }
     const handleSubmit = (event) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('called if false');
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        } else {
            console.log('called if true');
           
   
        event.preventDefault();
        const newRecord = {...UseReg}
        console.log(record)
        setRecord([...record, newRecord])
        moveNext();
        }
    
        
        
        // console.log(record)
     }
    const history=useHistory();
    const moveNext =()=> {
        history.push('/signUp')
    }
    return (
        <div className="login_form">
            <div className="sign_in"> 
                <Form noValidate validated={validated} onSubmit={handleSubmit}> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email"
                         autoComplete="off" 
                         value={UseReg.email} 
                         name="email"
                         onChange={handleIput} 
                         placeholder="Email or Phone" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                        type="password"
                        autoComplete="off"
                        value={UseReg.password}
                        name="password"
                        onChange={handleIput}
                        placeholder="Password" 
                        minLength="8" 
                        required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="started_btn"  >
                        Lets Get Started
                    </Button>
                </Form>
                <div className="login_with">
                    <Button variant="primary" type="submit" className="login_btn">
                        Login with Facebook
                    </Button>
                    <Button variant="primary" type="submit" className="login_btn blue_bg">
                        Login with Google
                    </Button>
                </div>
            </div>
          </div>
    )
}
