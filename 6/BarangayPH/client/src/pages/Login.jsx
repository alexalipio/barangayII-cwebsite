import { Link } from "react-router-dom"
import { FormRow,Logo } from "../components"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"

const Login = () => {
  return (
  <Wrapper>
    <form className="form">
    <Logo />
    <h4>Login</h4>
    
    <FormRow type='email' name='email'/>
    <FormRow type='password' name='password'/>
    <button type="submit" className="btn btn-block">Submit</button>
    <button type="button" className="btn btn-block">Login as Guest</button>
    <p>Not yet a member? <Link to="/register">Register here</Link></p>
    </form>

    </Wrapper>
    )
}
export default Login