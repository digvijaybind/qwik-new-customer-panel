// hospitalSlice.js
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const hospitalApi = createAsyncThunk(
  "api/hospital",
  async ( payload,{ rejectWithValue }) => {
 
    try {
      console.log("Payload before reaching API:", payload);
      const response = await apiClient.post(Endpoint.HospitalCareer, payload);
      console.log("Response from API:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in hospital API:", error);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
      }
      return rejectWithValue(error.response?.data || error.message);
    }
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
      })
      .addCase(hospitalApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch hospital data";
      });
  },
});

export default hospitalSlice.reducer;
