import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchEventsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEvents.pending, handlePending)
      .addCase(fetchEvents.fulfilled, handleFetchEventsFulfilled)
      .addCase(fetchEvents.rejected, handleRejected),
});

export const eventsReducer = eventsSlice.reducer;

export const eventActions = { ...eventsSlice.actions, fetchEvents };
