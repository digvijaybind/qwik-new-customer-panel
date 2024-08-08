import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DoctorApi = createAsyncThunk(`api/doctorapi`, async (data) => {
  const response = await apiClient.post(Endpoint.DoctorCarrer,data);
  return response.data;
});

const DoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctordata: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DoctorApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DoctorApi.fulfilled, (state, action) => {
        state.status = "succeded";
        state.doctordata = action.payload;
      })
      .addCase(DoctorApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default DoctorSlice.reducer;
