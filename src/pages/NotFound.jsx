import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>404 NOT FOUND</h2>
        <br />
        <Link to="/home" ><button class="form-submit">Home</button></Link>
    </div>
  )
}

export default NotFound