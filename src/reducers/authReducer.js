import { LOGIN } from "../actions/actionTypes"; // Import LOGIN action type constant

const initialState = {
  username: "", // Initial state with an empty username
};

// Reducer function for authentication related actions
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username, // Update username in state with the payload username
      };
    default:
      return state; // Return current state if action type doesn't match
  }
};

export default authReducer;
