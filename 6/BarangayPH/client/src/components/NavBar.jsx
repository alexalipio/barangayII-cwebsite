import Wrapper from "../assets/wrappers/Navbar"
import {FaHome, 
FaAlignLeft
} from "react-icons/fa"

const NavBar = () => {

  return <Wrapper>
   <div className="nav-center">
    <button type="button" className="toggle-btn">
        <FaAlignLeft/>
    </button>
   </div>
  </Wrapper>
}
export default NavBar