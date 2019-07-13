import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  isVisible: false,
  activatedIndex: 0,
};

export default createStore(reducer, initialState);
