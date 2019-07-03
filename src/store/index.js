import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { index: 0 };

export default createStore(reducer, initialState);
