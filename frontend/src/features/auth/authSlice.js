/* 
Contributors:
    - Jalal Kalyati
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: {
      reducer: (state, action) => {
        const { token, user } = action.payload;
        state.token = token;
        state.currentUser = user;
      },
      prepare: (token, user) => {
        return {
          payload: { token, user },
        };
      },
    },
    userLoggedOut: (state) => {
      state.token = null;
      state.currentUser = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.currentUser;

export const userLoggedOutListeners = (startListening) => {
  startListening({
    actionCreator: userLoggedOut,
    effect: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
    },
  });
};
