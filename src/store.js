// Importing createStore function from Redux library
import { createStore } from 'redux';

// Importing the root reducer from ./reducers/rootReducer.js
import rootReducer from './reducers/rootReducer';

// Creating a Redux store by passing the root reducer to createStore function
const store = createStore(rootReducer);

// Exporting the created store as the default export of this module
export default store;
