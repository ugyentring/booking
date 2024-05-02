import "./navbar.css";

//component import

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">TableBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
