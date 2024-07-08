import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      state.token = payload;
    },
    registerSuccess: (state, ) => {
      state.loading = false;
    },
  },
});

export const { loginFetchStart, loginFetchFail, loginSuccess,registerSuccess, } = loginSlice.actions;
export default loginSlice.reducer;
