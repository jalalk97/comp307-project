import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // TODO change baseUrl before deploying the app
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:4000", // uncomment for local development
    baseUrl: "/", // uncomment for deployment
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Bearer ${getState().auth.token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
