import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;

export const loginListeners = (startListening) => {
  startListening({
    matcher: authApiSlice.endpoints.login.matchFulfilled,
    effect: (action) => {
      const { token, user } = action.payload;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
  });
};
