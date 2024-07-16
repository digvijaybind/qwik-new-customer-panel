//commericialAPi integration

import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CommericialApi = createAsyncThunk(
  "/api/commericial",
  async (data) => {
    console.log("slices data", data);
    const response = await apiClient.post(Endpoint.CommericialSearch, data);
    console.log("commericial data line 12", response.data);
    return response.data;
  }
);

export const CommericialSingleApi = createAsyncThunk(
  `api/commericial/id`,
  async () => {
    const response = await apiClient.get(Endpoint.CommericialAircraftByid);
    return response.data;
  }
);

const commericialSlice = createSlice({
  name: "commericial",
  initialState: {
    commericialflights: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CommericialApi.pending, (state) => {
        console.log("still loading");
        state.status = "loading";
      })
      .addCase(CommericialApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("data line line 41", state.status);
        console.log("commricial data line 42", action.payload);

        state.commericialflights = action.payload;
      })
      .addCase(CommericialApi.rejected, (state, action) => {
        state.status = "failed";
        console.log("error");
        state.error = action.error.message;
      });
  },
});

export default commericialSlice.reducer;
