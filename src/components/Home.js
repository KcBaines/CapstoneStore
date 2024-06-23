import React from "react";  // Import React library to define React components
import '../styles/Home.css';  // Import CSS file for styling

function Home() {  // Define a functional component called Home
    return (
        <div className="home-welcome">  
            <h2>TO MAJESTIC MANE</h2>  {/* Heading element */}
            <p>Please register or login to shop.</p>  {/* Paragraph element with text */}
        </div>
    );
};

export default Home;  // Export the Home component as the default export
