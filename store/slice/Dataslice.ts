import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialState {
  data: any;
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: InitialState = {
  data: null,
  loading: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('fetchData', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching data.');
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = 'pending';
        state.error = null;
        console.log('Pending');
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
        console.log('Success');
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message || 'An error occurred.';
        console.log('Fail');
      });
  },
});

export default dataSlice.reducer;
