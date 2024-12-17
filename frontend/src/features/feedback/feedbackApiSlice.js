import { apiSlice } from "../api/apiSlice";

export const feedbackApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (meeting) => ({
        url: "/feedback",
        method: "POST",
        body: {
          ...meeting,
        },
      }),
    }),
  }),
});


export const {
    useCreateFeedbackMutation,
} = feedbackApiSlice;
