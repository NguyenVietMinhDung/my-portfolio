/* eslint-disable import/prefer-default-export */
import { ACTIVATE_NAVIGATION_ITEM } from './actionTypes';

export const activateNavigationItem = index => ({
  type: ACTIVATE_NAVIGATION_ITEM,
  payload: {
    index,
  },
});
