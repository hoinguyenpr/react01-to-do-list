import "./header.css";

const Header = () => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="/users">Users</a>
        <a href="/products">Product</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </>
  );
};

export default Header;
