import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { analysisList } from "../../api/url";
import { GET } from "../../api/axios";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "home/getPosts",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
