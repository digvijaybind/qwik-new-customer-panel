//hospital data
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const hospitalApi = createAsyncThunk(
  "api/hoispital",
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL} ${Endpoint.HospitalCareer}`,
      payload,
    );
    return response.data;
  },
);

const hospitalSlice = createSlice({
  name: "hospital",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hospitalApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(hospitalApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
    addCase(hospitalApi.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default hospitalSlice;
