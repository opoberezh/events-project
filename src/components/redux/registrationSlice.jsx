import { createSlice } from '@reduxjs/toolkit';
import { registerEvent } from './operations';

const handleRegisterPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRegisterRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleRegisterEventsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const registrationSlice = createSlice({
  name: 'registrations',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerEvent.pending, handleRegisterPending)
      .addCase(registerEvent.rejected, handleRegisterRejected)
      .addCase(registerEvent.fulfilled, handleRegisterEventsFulfilled);
  },
});

export const registrationsReducer = registrationSlice.reducer;
