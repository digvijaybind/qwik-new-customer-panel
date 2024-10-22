// paramedicSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient"; // Ensure the correct import path
import Endpoint from "@/api/endpoint";

// Define the async thunk for the paramedics form
export const ParamedicsApi = createAsyncThunk(
  "api/paramedics",
  async (payload, { rejectWithValue }) => {
    try {
      debugger;
      const response = await apiClient.post(Endpoint.ParamedicCareer, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// paramedicSlice.js
const ParamedicSlice = createSlice({
  name: "paramedic",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ParamedicsApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ParamedicsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        debugger;
        state.data = action.payload;
      })
      .addCase(ParamedicsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Adjust to show custom error message
      });
  },
});

export default ParamedicSlice.reducer;
