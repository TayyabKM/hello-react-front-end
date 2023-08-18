import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: false,
};

const Api = 'http://127.0.0.1:3000/';

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  const response = await fetch(Api);
  const data = await response.json();

  return data.greeting;
});

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        greeting: action.payload,
      }))
      .addCase(fetchRandomGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default greetingsSlice.reducer;
