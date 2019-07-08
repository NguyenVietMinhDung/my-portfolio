import constants from '../constants';

const { actions: { ACTIVATE_NAVIGATION_ITEM } } = constants;

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
