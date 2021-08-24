import React , {useState} from 'react';
import "../Widget/LoginForm.css";
import { useHistory } from 'react-router-dom';
import "./SignUpForm.css";
import { Form ,Button , Dropdown  } from 'react-bootstrap';
export default function SignUpForm() {
    const [UserInfo,setUserInfo] = useState({
        firstName:"",
        lastName:"",
        addressFirst:"",
        addressLine:""
    });
    const [record, setRecord]=useState([]);
    const [validated, setValidated] = useState(false);
    const history = useHistory();

    const handleInput =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserInfo({...UserInfo,[name] :value});
        // console.log(event.target.value)
    }
   

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
      setValidated(true);
      }else{
        event.preventDefault();
      const newRecord = {...UserInfo};
      
      setRecord([...record, newRecord]);
      moveNext()
      }

      
    };
    
    
    const moveNext =()=>{
        history.push('/ContactInfo')
    }
    const moveBack =()=>{
        history.goBack()
    }
    return (
        <div className="login_form">
            <div className="sign_in"> 
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* <div className="singUp_dropdown">
                        <Dropdown>
                        <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Language
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                            <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                            <Dropdown.Item href="#">English</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div> */}
                    <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
                        <Form.Control 
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        autoComplete="off"
                        value={UserInfo.firstName}
                        onChange={handleInput}
                        required
                        />
                        <Form.Control 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        autoComplete="off"
                        value={UserInfo.lastName}
                        onChange={handleInput}
                        required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" 
                        name="addressFirst"
                        placeholder="Street Address"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" 
                        name="addressLine"
                        placeholder="Street Address Line 2"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
                        <Form.Control type="text" 
                        placeholder="First Name"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required/>
                        <Form.Control type="text" 
                        placeholder="First Name"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required/>
                    </Form.Group> */}
                    {/* <Form.Group className="mb-3 double_input" controlId="formBasicEmail">
                        <Form.Control type="text" 
                        placeholder="First Name"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required/>
                        <Form.Control type="text" 
                        placeholder="First Name"
                        autoComplete="off"
                        value={UserInfo.text}
                        onChange={handleInput}
                        required/>
                    </Form.Group> */}
                
                <div className="login_with">
                    <Button variant="primary" type="submit" className="login_btn" >
                        Next
                    </Button>
                    <Button variant="primary" type="submit" className="login_btn blue_bg" onClick={moveBack}>
                        Cancel
                    </Button>
                </div>
                </Form>
            </div>
            
          </div> 
    )
}
