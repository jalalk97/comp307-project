import { apiSlice } from "../api/apiSlice";

/* 
Contributors:
    - Patrick Wilson 
*/


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
