import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../Containers/Webinars/webinarsSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    login: loginReducer,
  },
});
