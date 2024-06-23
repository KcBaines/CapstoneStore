import React, { useState } from "react";
import ShippingOptions from "./ShippingOptions"; // Import ShippingOptions component

const ShoppingApp = () => {
  const [shipmentMethod, setShipmentMethod] = useState("standard"); // State to manage selected shipment method

  // Function to handle when a shipment method is selected
  const handleSelectShipment = (method) => {
    setShipmentMethod(method); // Update the selected shipment method in state
  };

  return (
    <div>
      {/* Other shopping app content can go here */}

      {/* ShippingOptions component */}
      <ShippingOptions
        selectedOption={shipmentMethod} // Pass currently selected shipment method as prop
        onSelectOption={handleSelectShipment} // Pass the handler function to update selected shipment method
      />

      {/* Other shopping app content can go here */}
    </div>
  );
};

export default ShoppingApp;
