import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Containers/Webinars/webinarsSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    login: loginReducer,
  },
});
