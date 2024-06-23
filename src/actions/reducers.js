import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SELECT_SHIPPING_OPTION,} from './actionTypes';

const initialProductsState = [
  { id: 1, name: 'Saddle', price: 250 },
  { id: 2, name: 'Bridle', price: 120 },
  { id: 3, name: 'Stirrups', price: 50 },
];

const productsReducer = (state = initialProductsState, action) => {
  // For simplicity, products state remains static
  return state;
};

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const initialShippingOptionsState = [
  { id: 1, name: 'Standard Shipping', cost: 10 },
  { id: 2, name: 'Express Shipping', cost: 20 },
];

const shippingOptionsReducer = (state = initialShippingOptionsState, action) => {
  // For simplicity, shipping options state remains static
  return state;
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  shippingOptions: shippingOptionsReducer,
});

export default rootReducer;
