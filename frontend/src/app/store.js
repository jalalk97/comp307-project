import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from '../features/meeting/meetingSlice';
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";

import { listenerMiddleware } from "./listenerMiddleware";

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    // Declare that `state.auth` will be updated by the `authReducer` function
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    meeting: meetingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
});
