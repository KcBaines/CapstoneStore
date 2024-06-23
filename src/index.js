import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for createRoot usage
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducers/cartReducers"; // Import your cart reducer (adjust the path if necessary)
import App from "./App"; // Import your main App component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Import custom CSS for the app

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Add your cart reducer here
});

// Create Redux store with combined reducers
const store = createStore(rootReducer);

// Use createRoot instead of ReactDOM.render for concurrent mode
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your App component with Provider and render with createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Provide the Redux store to the entire app */}
      <App /> {/* Render your main App component */}
    </Provider>
  </React.StrictMode>
);
