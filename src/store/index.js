import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { activatedIndex: 0 };

export default createStore(reducer, initialState);