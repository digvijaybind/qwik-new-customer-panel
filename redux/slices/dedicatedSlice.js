//dedicated Slice

import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const DedicatedApi = createAsyncThunk("/api/dedicated", async (data) => {
  const response = await apiClient.post(Endpoint.DedicatedSearch, data);
  console.log("dedicated api response line 9", response.data);
  return response.data;
});

export const DedicatedSingleApi = createAsyncThunk(
  `/api/dedicated`,
  async () => {
    const response = await apiClient.get(Endpoint.DedicatedAircraftByid);
    return response.data;
  }
);

const dedicatedSlice = createSlice({
  name: "dedicated",
  initialState: {
    dedicatedflights: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DedicatedApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DedicatedApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("dedicated line 37 ", action.payload);
        state.dedicatedflights = action.payload;
      })
      .addCase(DedicatedApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dedicatedSlice.reducer;
