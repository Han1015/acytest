import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { analysisList } from "../../api/url";
import { GET } from "../../api/axios";

const initialState = {
  postsList: [],
  status: "",
};

export const getPostsListAsync = createAsyncThunk(
  "posts/getposts",
  async () => {
    const res = await GET(analysisList);
    return res.data;
  }
);

export const deletefavouritePostAsync = createAsyncThunk("posts", async () => {
  const response = await GET(analysisList);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const getfavouritePostAsync = createAsyncThunk("posts", async () => {
  const response = await GET(analysisList);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPostsListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsListAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.postsList = payload;
      }),
});

export default postsSlice.reducer;
