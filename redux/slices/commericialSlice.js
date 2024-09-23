//commericialAPi integration

import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CommericialApi = createAsyncThunk(
  "/api/commericial",
  async (data) => {
    console.log("slices data", data);
    const response = await apiClient.post(Endpoint.CommericialSearch, data);
    return response.data;
  },
);

// export const CommericialSingleApi = createAsyncThunk(
//   `api/commericial/id`,
//   async (id) => {
//     console.log("Id is coming to inside commericial", id);
//     const endpoint = Endpoint.CommericialAircraftByid.replace(":id", id);
//     const response = await apiClient.get(endpoint);
//     console.log("single flights details", response.data);
//     return response.data;
//   },
// );

const commericialSlice = createSlice({
  name: "commericial",
  initialState: {
    commericialflights: [],
    loadingFlights: false, 
    errorFlights: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CommericialApi.pending, (state) => {
        state.loadingFlights = true;
        state.errorFlights=null;
      })
      .addCase(CommericialApi.fulfilled, (state, action) => {
        state.loadingFlights = false;
        state.commericialflights = action.payload;
      })
      .addCase(CommericialApi.rejected, (state, action) => {
        state.loadingFlights = false;
        state.errorFlights = action.error.message;
      })
   
  },
});

export default commericialSlice.reducer;
