import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user-register",
        method: "POST",
        body: userInfo,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result?.data?.token) {
            localStorage.setItem("betxfire_jwt", result?.data?.token);
            dispatch(
              userLoggedIn({
                token: result?.data?.token,
                data: result?.data?.user,
              })
            );
          }
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/user-login",
        method: "POST",
        body: loginInfo,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result?.data?.token) {
            localStorage.setItem("betxfire_jwt", result?.data?.token);
            dispatch(
              userLoggedIn({
                token: result?.data?.token,
                data: result?.data?.user,
              })
            );
          }
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
