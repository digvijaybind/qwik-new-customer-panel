//aircraftoperator form integration
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const Aircraftoperator = createAsyncThunk(
  "api/aircraftform",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("Payload being sent to Doctor API:", payload);
      const response = await apiClient.post(
        Endpoint.AircraftOperatorcareer,
        payload,
      );
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
        state.data = action.payload;
      })
      .addCase(Aircraftoperator.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default aircraftoperatorSlice;
