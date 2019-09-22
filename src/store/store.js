import thunk from 'redux-thunk';
import reducer from '../_reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
