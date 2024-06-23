// Action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_SHIPPING_OPTION = "SELECT_SHIPPING_OPTION";
export const LOGIN = "LOGIN";

// Action creators

// Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product, // Payload is the product being added to the cart
});

// Action creator for removing a product from the cart
export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product, // Payload is the product being removed from the cart
});

// Action creator for selecting a shipping option
export const selectShippingOption = (option) => ({
  type: SELECT_SHIPPING_OPTION,
  payload: option, // Payload is the selected shipping option
});
