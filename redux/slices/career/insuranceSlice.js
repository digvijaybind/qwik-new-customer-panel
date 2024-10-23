// slices/InsuranceSlice.js
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
        state.data.push(action.payload); 
         Swal.fire({
           position: "center",
           icon: "success",
           title: "Thank you for registering!", 
           html: "Welcome to <b>QwikLif</b>. Your journey starts here!", 
           background: "#f5f7fa", 
           iconColor: "#4CAF50", 
           showConfirmButton: false, 
           timer: 4000,
           toast: true,
           showClass: {
             popup: "animate__animated animate__fadeInDown",
           },
           hideClass: {
             popup: "animate__animated animate__fadeOutUp",
           },
         });
      })
      .addCase(insuranceApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default insuranceSlice.reducer; // Export the reducer
