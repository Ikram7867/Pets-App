import "./login.css";
import LoginLeftInfo from '../widget/login_left_info';
import LoginForm from '../widget/login_form';
import Dog from "../images/Image28.png";
function Login() {
  return (
    <div className="main_outer">
      <div className="custom_container">
        <div className="login_outer">
          <LoginLeftInfo image={Dog} tittle="Welcome To Petstore"/>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}
export default Login;
