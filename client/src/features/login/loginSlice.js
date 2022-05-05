import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET, POST } from "../../api/axios";
import { login, logout, userInfo } from "../../api/url";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../utils";
const initialState = {
  userInfo: {},
  loginStatus: false,
};

export const loginAsync = createAsyncThunk("login/userlogin", async (data) => {
  const res = await POST(login, data);
  let {
    auth: { access_token },
  } = res;

  setLocalStorage({ token: access_token });
  return res;
});
export const logoutAsync = createAsyncThunk("login/userlogout", async () => {
  await POST(`${logout}?token=${getLocalStorage("token")}`);
});

export const checkLoginAsync = createAsyncThunk(
  "login/checklogin",

  async () => {
    let token = getLocalStorage("token");
    let res = {};
    if (token) {
      res = await GET(`${userInfo}?token=${getLocalStorage("token")}`);
      return res;
    }
    return Promise.reject();
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loginStatus = false;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.loginStatus = true;
        state.userInfo = payload;
      })
      .addCase(checkLoginAsync.pending, (state) => {
        state.loginStatus = false;
      })
      .addCase(checkLoginAsync.fulfilled, (state, { payload }) => {
        state.loginStatus = true;
        state.userInfo = payload;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        console.log("asdcasdcscsdc ");
        removeLocalStorage("token");
        state.loginStatus = false;
      }),
});

export default loginSlice.reducer;
