// paramedicSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient"; // Ensure the correct import path
import Endpoint from "@/api/endpoint";
import Swal from "sweetalert2";
// Define the async thunk for the paramedics form
export const ParamedicsApi = createAsyncThunk(
  "api/paramedics",
  async (payload, { rejectWithValue }) => {
    try {
 
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
       
        state.data = action.payload;
         Swal.fire({
           position: "center", // Position the alert in the center
           icon: "success", // Display the success icon
           title: "Thank you for registering!", // Title of the message
           html: "Welcome to <b>QwikLif</b>. Your journey starts here!", // Message content with HTML for styling
           background: "#f5f7fa", // Set a custom background color
           iconColor: "#4CAF50", // Change icon color to a pleasant green
           showConfirmButton: false, // Hide the confirm button
           timer: 4000, // Set the timer to auto-close the alert after 2 seconds
           toast: true, // Make it appear as a toast-style popup
           showClass: {
             popup: "animate__animated animate__fadeInDown", // Add an animation on show (using Animate.css)
           },
           hideClass: {
             popup: "animate__animated animate__fadeOutUp", // Add an animation on hide
           },
         });
      })
      .addCase(ParamedicsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Adjust to show custom error message
      });
  },
});

export default ParamedicSlice.reducer;
