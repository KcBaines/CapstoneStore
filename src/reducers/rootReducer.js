import { combineReducers } from "redux"; // Import combineReducers function from Redux
import authReducer from "./authReducer"; // Import authReducer
import cartReducer from "./cartReducers"; // Import cartReducer

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer, // 'auth' slice of state managed by authReducer
  cart: cartReducer, // 'cart' slice of state managed by cartReducer
});

export default rootReducer;
