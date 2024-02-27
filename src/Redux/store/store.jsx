import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import userSlice from "../user/userSlice";
import accountSlice from "../account/accountSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
