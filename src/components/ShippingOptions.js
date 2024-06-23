import React, { useState } from 'react';
import '../styles/ShippingOptions.css';

const ShippingOptions = ({ onSelectShipping }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [helpRequested, setHelpRequested] = useState(false);

  // Define shipping options directly within the component
  const shippingOptions = [
    { id: 1, name: 'Standard Shipping', cost: 60 },
    { id: 2, name: 'Express Shipping', cost: 100 },
    { id: 3, name: 'Overnight Shipping', cost: 120 }
  ];

  // Function to handle selecting a shipment method
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    const selectedOption = shippingOptions.find(option => option.name === method);
    onSelectShipping(selectedOption.cost);
  };

  // Function to handle help request
  const handleHelpRequest = () => {
    setHelpRequested(true);
    // You can implement further logic here, like showing a modal with help information
  };

  return (
    <div className='shipping'>
      <h2>Select Shipment Method</h2>
      {shippingOptions.map(option => (
        <div key={option.id} className="shipping-option">
          <button
            onClick={() => handleMethodSelect(option.name)}
            className={`shipping-button ${selectedMethod === option.name ? 'selected' : ''}`}
          >
            {option.name} - R{option.cost}
          </button>
        </div>
      ))}

      {selectedMethod && (
        <p>Selected Method: {selectedMethod}</p>
      )}

      <button onClick={handleHelpRequest}>Request Help</button>
      
      {helpRequested && (
        <p>To request help regarding shipping, please contact our customer support.</p>
      )}
    </div>
  );
};

export default ShippingOptions;
