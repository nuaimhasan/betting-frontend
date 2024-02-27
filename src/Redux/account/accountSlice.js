import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const accountSlice = createSlice({
  name: "accountSidebar",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const { setSidebar } = accountSlice.actions;
export default accountSlice.reducer;
