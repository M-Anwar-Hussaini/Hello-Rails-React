import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getGreeting = createAsyncThunk('greetings/getGreetings', async () => {
  const response = await fetch("/api/v1/greeting/random_greeting");
  const data = await response.json();
  return data.greeting;
})

const greetingSlice = createSlice({
  name: 'greetings', initialState: {
    greeting: null, status: null,
  }, extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.status = 'loading'
    }).addCase(getGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.greeting = action.payload;
    }).addCase(getGreeting.rejected, (state, action) => {
      state.status = 'failed';
      state.greeting = action.error.message;
    })
  }
});

export default greetingSlice.reducer;