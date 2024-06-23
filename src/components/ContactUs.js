import React from "react";
import "../styles/ContactUs.css"; // Import CSS file for ContactUs component

const ContactUs = () => {
  const emailAddress = "contact@example.com"; // Email address
  const phoneNumber = "+1-123-456-7890"; // Phone number

  return (
    <div className="contact-box">
      {/* ContactUs component container */}
      <h1>Contact Us</h1> 
      <p>
        Email:
        <a href={`mailto:${emailAddress}`} aria-label="Email">
          {emailAddress}
        </a>
      </p>
      {/* Email contact link */}
      <p>
        Phone:
        <a href={`tel:${phoneNumber}`} aria-label="Phone">
          {phoneNumber}
        </a>
      </p>
      {/* Phone contact link */}
    </div>
  );
};

export default ContactUs;
