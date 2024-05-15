import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components"
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
  <Wrapper>
   <nav>
    <Logo/>
    <h5>Barangay<strong>PH</strong></h5>
   </nav>
   <div className="container page">
<div className="info">
<h1>Barangay<span>PH</span></h1>
<p>
<p><em>Kamusta Ka, Ka-Barangay? 🌟</em></p>

  <p>Welcome to the Barangay Web Application—where we've turned Bayanihan into a digital art form! 🏡💻</p>

  <p>Kung feeling mo lost ka sa barangay events, permit applications, or kahit saan pa, 'wag mag-alala! Our app is your go-to tambayan for everything from A to Z! 🌐🤳</p>

</p>
<Link to="/register" className="btn register-link"> Register</Link>
<Link to="/login" className="btn"> Login</Link>
</div>
<img src={main} alt="" />
</div>
  </Wrapper>
  );
};

export default Landing