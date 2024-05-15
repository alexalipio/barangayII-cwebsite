import { Link, useRouteError } from "react-router-dom"
import Wrapper  from "../assets/wrappers/ErrorPage"
import NotFound from "../assets/images/not-found.svg"

const Error = () => {
  const error = useRouteError();

  if(error.status === 404){
    return <Wrapper>
    <img src={NotFound} alt="not-found" />
    <h1>Error {error.status}</h1>
    <h4>{error.statusText}</h4>
    <Link to="/">Return Home</Link>
    </Wrapper>
  }

  return <Wrapper>
    <img src={NotFound} alt="" />
    <h1>Error {error.status}</h1>
    <h3>{error.statusText}</h3>
    <Link to="/">Return to Home</Link>
    </Wrapper>
}
export default Error 