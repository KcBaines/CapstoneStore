import React from "react";  // Import React library to define React components
import { Link } from "react-router-dom";  // Import Link component from react-router-dom for navigation
import { BiCart } from "react-icons/bi";  // Import BiCart icon from react-icons/bi library
import "../styles/Navigation.css";  // Import CSS file for styling
import Logo from "../img/logo.jpg";  // Import image file for logo

function Navigation({ username }) {  // Define a functional component called Navigation, receiving prop 'username'
  return (
    <header>  
      {/* First navigation bar (box1) */}
      <nav className="box1">
        <Link to="/cart"><BiCart className="cart-icon"/> CART</Link>  {/* Link to /cart with BiCart icon and text 'CART' */}
        <Link to="/register">REGISTER</Link>  {/* Link to /register for registration */}
        <Link to="/login">LOGIN</Link>  {/* Link to /login for login */}
      </nav>

      {/* Second navigation bar (navbar) */}
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo"/>  {/* Logo image */}
        <Link to="/">HOME</Link>  {/* Link to / for home */}
        <Link to="/Products">PRODUCTS</Link>  {/* Link to /Products for products */}
        <Link to="/Contact">CONTACT US</Link>  {/* Link to /Contact for contact us */}
      </nav>

      <div className="welcome">WELCOME, {username}</div>  {/* Display welcome message with username */}
    </header> 
  );
}

export default Navigation;  // Export the Navigation component as the default export
