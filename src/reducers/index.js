import actions from '../actions';

const { actionTypes: { ACTIVATE_NAVIGATION_ITEM } } = actions;

export default (state, action) => {
  switch (action.type) {
    case ACTIVATE_NAVIGATION_ITEM:
      return {
        ...state,
        activatedIndex: action.payload.index,
      };
    default:
      return state;
  }
};
