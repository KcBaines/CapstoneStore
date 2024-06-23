import React, { useState } from "react"; // Import React and useState hook
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch hooks from react-redux
import { Card, Button } from "react-bootstrap"; // Import Card and Button components from react-bootstrap
import { removeFromCart } from "../actions/cartActions"; // Import the removeFromCart action creator
import ShippingOptions from "./ShippingOptions"; // Import ShippingOptions component
import "../styles/Cart.css"; // Import CSS file for styling

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Select cart items from Redux state
  const [shippingCost, setShippingCost] = useState(0); // State to hold shipping cost
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch removeFromCart action with item ID
  };

  // Function to update shipping cost
  const handleSelectShipping = (cost) => {
    setShippingCost(cost); // Update shipping cost state with selected cost
  };

  // Calculate total price including shipping
  const totalPrice =
    cartItems.reduce((total, item) => total + item.price, 0) + shippingCost;

  return (
    <div className="cart-box">
      <h2>Cart</h2> 
      <p>Total: R {totalPrice}</p>{" "}
      {/* Display total price including shipping */}
      <ShippingOptions onSelectShipping={handleSelectShipping} />{" "}
      {/* Render ShippingOptions component and pass handleSelectShipping as prop */}
      {cartItems.length === 0 ? ( // Conditional rendering based on cartItems length
        <p>Your cart is empty.</p> // Render message if cart is empty
      ) : (
        <div className="cart-items-container">
          {" "}
          {/* Container for cart items */}
          {cartItems.map(
            (
              item // Map through cartItems array
            ) => (
              <Card key={item.id} className="cart-item">
                {" "}
                {/* Card for each cart item */}
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title> {/* Item name */}
                  <Card.Text>Quantity: {item.quantity}</Card.Text>{" "}
                  {/* Item quantity */}
                  <Card.Text>Price: R{item.price}</Card.Text> {/* Item price */}
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.id)} // Button to remove item from cart
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Cart; // Export Cart component as default
