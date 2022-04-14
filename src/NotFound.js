import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="not-found">
          <h2>Ooops</h2>
          <p>you are on a wrong page</p>
          <Link to='/'>Back to the Homepage...</Link>
      </div>  
      );
}
 
export default NotFound;