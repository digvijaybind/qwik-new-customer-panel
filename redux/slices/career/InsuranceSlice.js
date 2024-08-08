import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";

export const fetchInsuranceData = createAsyncThunk(
  "insurance/fetchInsuranceData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(Endpoint.Insurancefirm, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  insuranceData: [],
  status: "idle",
  error: null,
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsuranceData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchInsuranceData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.insuranceData = action.payload;
      })
      .addCase(fetchInsuranceData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default insuranceSlice.reducer;
