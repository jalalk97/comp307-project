import { apiSlice } from "../api/apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createBooking: builder.mutation({
        query: (booking) => ({
          url: "/booking",
          method: "POST",
          body: {
            ...booking,
          },
        }),
      })
    }),
});

export const {
    useCreateBookingMutation,
} = bookingApiSlice;
