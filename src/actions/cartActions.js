// Action type constants
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART, // Action type for adding an item to cart
    payload: item, // Data payload containing the item to be added
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART, // Action type for removing an item from cart
    payload: itemId, // Data payload containing the ID of the item to be removed
  };
};
