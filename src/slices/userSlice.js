import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.username = "";
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
