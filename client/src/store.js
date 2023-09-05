import { createStore } from 'redux';
import rootReducer from './Redux/reducers/rootReducer'; // Crea los reducers necesarios

const store = createStore(rootReducer);

export default store;