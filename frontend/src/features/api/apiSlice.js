import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(import.meta.env.VITE_API_URL);

export const apiSlice = createApi({
  // TODO change baseUrl before deploying the app
  baseQuery: fetchBaseQuery({
    // baseUrl: , // uncomment for local development
    // baseUrl: "/", // uncomment for deployment
    baseUrl: import.meta.env.VITE_API_URL,
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
