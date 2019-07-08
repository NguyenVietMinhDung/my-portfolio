/* eslint-disable import/prefer-default-export */
import constants from '../constants';

const { actions: { ACTIVATE_NAVIGATION_ITEM } } = constants;

export const activateNavigationItem = index => ({
  type: ACTIVATE_NAVIGATION_ITEM,
  payload: {
    index,
  },
});

export default {
  activateNavigationItem,
};
