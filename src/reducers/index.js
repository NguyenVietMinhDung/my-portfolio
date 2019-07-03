export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVATED_NAVIGATION_ITEM':
      return {
        ...state,
        index: action.payload.index,
      };
    default:
      return state;
  }
};
