import { apiSlice } from "../api/apiSlice";

export const meetingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAvailability: builder.mutation({
            query:(urlParam) => ({
                url: `/meeting?${new URLSearchParams(urlParam)}`,
                method: 'GET',
            })
        })
    }),
});

export const { useGetAvailabilityMutation } = meetingApiSlice;
