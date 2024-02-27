import { apiSlice } from "../api/apiSlice";

export const betApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeBet: builder.mutation({
      query: (data) => ({
        url: "/bet/submit",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bet"],
    }),
  }),
});

export const { usePlaceBetMutation } = betApi;
