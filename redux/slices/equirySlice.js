// equiry Slice

import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const EquieryApi = createAsyncThunk(`/enquiry`, async (data) => {
  const response = await apiClient.post(Endpoint.ConfirmEquiry, data);
  console.log("endquiry data ", data);
  return response.data;
});

const EquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EquieryApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(EquieryApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(EquieryApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default EquirySlice.reducer;
