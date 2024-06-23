import { LOGIN } from "./actionTypes"; // Import LOGIN action type constant

// Action creator for login action
export const login = (username) => {
  return {
    type: LOGIN, // Action type indicating a login action
    payload: { username }, // Payload containing the username information
  };
};
