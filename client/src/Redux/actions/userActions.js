//useractions.js

import { SET_USER, CLEAR_USER } from "./action.types.js";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
