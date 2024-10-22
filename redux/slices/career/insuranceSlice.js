// slices/InsuranceSlice.js
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Async thunk for insurance data submission
export const insuranceApi = createAsyncThunk(
  "api/insurance",

  async (payload, { rejectWithValue }) => {
    try {
      console.log("Payload before reaching API:", payload);
      const response = await apiClient.post(Endpoint.Insurance, payload);
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

// Create insurance slice
const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insuranceApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insuranceApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Push new insurance data into the existing array
      })
      .addCase(insuranceApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default insuranceSlice.reducer; // Export the reducer
