import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </>
  );
};

export default Header;
