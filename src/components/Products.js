import React, { useState } from 'react';  // Import React and useState hook
import { Card, Button, Alert } from 'react-bootstrap';  // Import Card, Button, and Alert components from react-bootstrap
import { useDispatch } from 'react-redux';  // Import useDispatch hook from react-redux for dispatching actions
import { addToCart } from '../actions/cartActions'; // Import your addToCart action creator from cartActions
import '../styles/Products.css';  // Import CSS file for styling
import Image1 from '../img/bridle.jpg';  // Import images for products
import Image2 from '../img/saddle.jpg';
import Image3 from '../img/lead.jpg';
import Image4 from '../img/halter&lead.jpg';
import Image5 from '../img/numnah.jpg';
import Image6 from '../img/stable-blanket.jpg';
import Image7 from '../img/rain-blanket.jpg';
import Image8 from '../img/helmet.jpg';
import Image9 from '../img/fly-mask.jpg';

const ProductPage = () => {
  const dispatch = useDispatch();  // Initialize useDispatch hook to dispatch actions
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  // Array of products with their details
  const products = [
    { id: 1, name: 'Bridle', price: 1000, image: Image1 },
    { id: 2, name: 'English Dressage Saddle', price: 29000, image: Image2 },
    { id: 3, name: 'Lunging Lead 8m', price: 200, image: Image3 },
    { id: 4, name: 'Halter & Lead', price: 500, image: Image4 },
    { id: 5, name: 'Numnah', price: 700, image: Image5 },
    { id: 6, name: 'Stable Blanket', price: 900, image: Image6 },
    { id: 7, name: 'Rain Blanket', price: 1380, image: Image7 },
    { id: 8, name: 'Helmet', price: 1000, image: Image8 },
    { id: 9, name: 'Fly Mask', price: 400, image: Image9 },    
  ];

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action
    setShowAlert(true); // Set showAlert to true to display the alert

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className='products'>  {/* Products section */}
      <h2>Products</h2>  
      {/* Display alert message when item is added to cart */}
      <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
        Item added to cart successfully!
      </Alert>
      <div className='products-box'>  
        <div className="row">  {/* Row for grid layout */}
          {products.map(product => (  // Mapping through products array
            <div className="col-md-4 mb-4" key={product.id}>  {/* Bootstrap column for each product */}
              <Card>  {/* Card component from react-bootstrap */}
                <Card.Img variant="top" src={product.image} alt={product.name} />  {/* Product image */}
                <Card.Body>  {/* Card body */}
                  <Card.Title>{product.name}</Card.Title>  {/* Product name */}
                  <Card.Text>Price: R {product.price}</Card.Text>  {/* Product price */}
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>  {/* Button to add product to cart */}
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;  // Export ProductPage component as default
