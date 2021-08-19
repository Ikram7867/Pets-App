import "./Login.css";
import LoginLeftInfo from '../Widget/LoginLeftInfo';
import LoginForm from '../Widget/LoginForm';
function Login() {
  return (
    <div className="main_outer">
      <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image='/images/Image28.png' tittle="Welcome To Petstore"/>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}
export default Login;
