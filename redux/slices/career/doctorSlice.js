import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";

// Create an async thunk for calling the Doctor API
export const DoctorApi = createAsyncThunk(
  "api/doctor",
  async (payload, { rejectWithValue }) => {
    try {
      // Log to ensure payload is correct
      console.log("Payload for Doctor API line 11", payload);

      // Post the data to the API endpoint
      const response = await apiClient.post(Endpoint.DoctorCareer, payload);

      // Log the successful response
      console.log("Doctor API response line 17", response.data);

      // Return the response data
      return response.data;
    } catch (error) {
      console.error("Error from Doctor API:", error.response || error.message);

      // Return a rejected value based on error response
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

// Create the slice for handling doctor data in Redux state
const DoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DoctorApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DoctorApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Log and assign the response data to state
        console.log("Doctor data received:", action.payload);
        state.data = action.payload;
      })
      .addCase(DoctorApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        // Log the error to better understand the issue
        console.error("Doctor API error:", state.error);
      });
  },
});

export default DoctorSlice;
