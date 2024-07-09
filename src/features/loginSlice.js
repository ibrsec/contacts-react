import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username:"",
  token: "",
  loading: false,
  error: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginFetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginFetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload?.accessToken;
      state.username = payload?.username;
    },
    registerSuccess: (state, ) => {
      state.loading = false;
    },
    logoutSuccess: (state, ) => {
      state.token = "";
    },
  },
});

export const { loginFetchStart, loginFetchFail, loginSuccess,registerSuccess,logoutSuccess, } = loginSlice.actions;
export default loginSlice.reducer;
