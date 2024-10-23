import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import Swal from "sweetalert2";

// Create an async thunk for calling the Doctor API
export const DoctorApi = createAsyncThunk(
  "api/doctor",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("Payload being sent to Doctor API:", payload);

      const response = await apiClient.post(Endpoint.DoctorCareer, payload);
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

        state.data = action.payload;
        console.log("Doctor API response:", response.status, response.data);
      })
      .addCase(DoctorApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        console.error("Doctor API error:", state.error);
      });
  },
});

export default DoctorSlice;
