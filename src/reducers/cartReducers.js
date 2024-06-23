// Initial state for the cart
const initialState = {
  items: [], // Array to hold items in the cart
  totalPrice: 0, // Total price of items in the cart
};

// Function to calculate total price based on items in the cart
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Reducer function for handling cart actions
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If item exists, update quantity and total price
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        // If item doesn't exist, add to cart with quantity 1 and update total price
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    case "REMOVE_FROM_CART":
      // Remove item from cart based on action payload (item id)
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
        totalPrice: calculateTotalPrice(updatedItems), // Recalculate total price after removal
      };
    default:
      return state; // Return current state for unrecognized actions
  }
};

export default cartReducer; // Export the cartReducer function as default
