import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import {Logo,FormRow} from "../components"
const Register = () => {
  return <Wrapper>
   <form className="form">
    <Logo/>
    <h4>Register</h4>
    <FormRow type="text" name="firstname" defaultValue="Juan"/>
    <FormRow type="text" name="lastname" labelText="Lastname" defaultValue="Dela Cruz"/>
    <FormRow type="email" name="email" defaultValue="JuanDelaCruz@barangay.ph"/>
    <FormRow type="text" name="barangay" />
    <FormRow type="password" name="password1" />
    <FormRow type="password" name="password2" />
    <button type="submit" className="btn btn-block">Submit</button>
    <p>Already a member? <Link to="/login" className="member-btn"> Login</Link></p>
   </form>
    </Wrapper>
}
export default Register