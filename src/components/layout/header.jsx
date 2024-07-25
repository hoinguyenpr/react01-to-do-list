import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="topnav">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default Header;
