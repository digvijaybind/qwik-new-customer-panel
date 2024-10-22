//aircraftoperator form integration
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Aircraftoperator = createAsyncThunk(
  "api/aircraftform",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("Payload being sent to Doctor API:", payload);
      const response = await apiClient.post(Endpoint.AircraftOperatorcareer,payload);
      console.log("Doctor API response:", response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error from Doctor API:", error.response.data);
        return rejectWithValue(error.response.data.message || "Error occurred");
      } else {
        console.error("Network or other error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  },
);

const aircraftoperatorSlice = createSlice({
  name: "aircraftoperator",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Aircraftoperator.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Aircraftoperator.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(Aircraftoperator.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default aircraftoperatorSlice;
