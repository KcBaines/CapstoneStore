import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; // Importing Navigation component
import Home from "./components/Home"; // Importing Home component
import Products from "./components/Products"; // Importing Products component
import ContactUs from "./components/ContactUs"; // Importing ContactUs component
import RegistrationForm from "./components/RegistrationForm"; // Importing RegistrationForm component
import LoginForm from "./components/LoginForm"; // Importing LoginForm component
import Header from "./components/Header"; // Importing Header component
import Cart from "./components/Cart"; // Importing Cart component
import ShippingOptions from "./components/ShippingOptions"; // Importing ShippingOptions component
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./App.css"; // Importing custom App CSS

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user
  const [registeredUsers, setRegisteredUsers] = useState([]); // State to store registered users

  // Function to handle user registration
  const handleRegister = (formData) => {
    console.log("Registration Data:", formData);
    setRegisteredUsers([...registeredUsers, formData]); // Add new user to registeredUsers array
  };

  // Function to handle user login
  const handleLogin = (username) => {
    console.log("Login Data:", username);
    // Check if the username exists in registered users
    const user = registeredUsers.find((user) => user.username === username);
    if (user) {
      setLoggedInUser(user.username); // Set logged-in user if username is found
    } else {
      console.log("User not registered. Please register first.");
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedInUser(null); // Clear logged-in user on logout
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Component */}
        <Navigation username={loggedInUser} onLogout={handleLogout} />

        {/* Main Content */}
        <main className="box2">
          {/* Routing Setup */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Route to Home component */}
            <Route path="/products" element={<Products />} />{" "}
            {/* Route to Products component */}
            <Route path="/contact" element={<ContactUs />} />{" "}
            {/* Route to ContactUs component */}
            <Route path="/cart" element={<Cart />} />{" "}
            {/* Route to Cart component */}
            <Route path="/shipping" element={<ShippingOptions />} />{" "}
            {/* Route to ShippingOptions component */}
            <Route
              path="/register"
              element={<RegistrationForm handleRegister={handleRegister} />} // Route to RegistrationForm component with handleRegister prop
            />
            <Route
              path="/login"
              element={<LoginForm handleLogin={handleLogin} />} // Route to LoginForm component with handleLogin prop
            />
          </Routes>
          {/* Header Component */}
          {loggedInUser && <Header username={loggedInUser} />}{" "}
          {/* Display Header component if user is logged in */}
        </main>
      </div>
    </Router>
  );
}

export default App;
