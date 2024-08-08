import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const aircraftOperator = createAsyncThunk(
  `api/aircraftoperator`,
  async (data) => {
    const response = apiClient.post(Endpoint.AircraftOperatorcareer, data);
    return response.data;
  }
);

const aircraftOperatorSlice = createSlice({
  name: "aircraftoperator",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(aircraftOperator.pending, (state) => {
        state.status = "pending";
      })
      .addCase(aircraftOperator.fulfilled, (state, action) => {
        state.status = "succecded";
        state.data = action.payload;
      })
      .addCase(aircraftOperator.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default aircraftOperatorSlice.reducer;
