// slices/InsuranceSlice.js
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Async thunk for insurance data submission
export const insuranceApi = createAsyncThunk(
  "api/insurance",
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL} ${Endpoint.Insurance}`, // Adjust the endpoint as needed
      payload,
    );
    return response.data;
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
