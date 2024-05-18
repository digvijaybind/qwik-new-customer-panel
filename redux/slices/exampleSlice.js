import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//define initial state

const initialState = {
  data: [], // data
  status: 'idle', // 'idle','loading','succedded','failed'
  error: null,
};

//define an async thunk for fetching data

export const fetchData = createAsyncThunk('example/fetchdata', async () => {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    //define your synchrounous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        (state.status = 'succedeed'), (state.status = action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default exampleSlice.reducer;
