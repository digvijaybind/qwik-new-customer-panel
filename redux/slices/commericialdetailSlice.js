import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const CommericialSingleApi = createAsyncThunk(
  "api/commericial/fetchById", 
  async (id, { rejectWithValue }) => {
    try {
      console.log("Fetching commercial flight with ID:", id);
      const endpoint = Endpoint.CommericialAircraftByid.replace(":id", id);
      const response = await apiClient.get(endpoint);
      console.log("Single flight details response:", response.data);
      return response.data; 
    } catch (error) {
      console.error("Error fetching commercial flight details:", error);
      return rejectWithValue(error.response?.data || error.message); 
    }
  },
);

const commericialdetailSlice = createSlice({
  name: "commericialdetails",
  initialState: {
    commerialflightdetails: null, 
    loadingSingleFlight: false,
    errorSingleFlight: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CommericialSingleApi.pending, (state) => {
        state.loadingSingleFlight = true;
        state.errorSingleFlight = null; 
      })
      .addCase(CommericialSingleApi.fulfilled, (state, action) => {
        state.loadingSingleFlight = false;
        state.commerialflightdetails = action.payload;
      })
      .addCase(CommericialSingleApi.rejected, (state, action) => {
        state.loadingSingleFlight = false;
        state.errorSingleFlight =
          action.payload || "Failed to fetch flight details.";
      });
  },
});

export default commericialdetailSlice.reducer;
