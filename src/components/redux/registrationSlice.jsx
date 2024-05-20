import { createSlice } from '@reduxjs/toolkit';
import { registerEvent, fetchRegisteredUsersOnEvent } from './operations';

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
  const { eventId, registration } = action.payload;
  state.items.push({ eventId, ...registration });
};

const handleFetchRegistrationsPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFetchRegistrationsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchRegistrationsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const { eventId, registrations } = action.payload;
  state.items = state.items.filter((item) => item.eventId !== eventId);
  registrations.forEach((registration) => {
    state.items.push({ eventId, ...registration });
  });
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
      .addCase(registerEvent.fulfilled, handleRegisterEventsFulfilled)
      .addCase(
        fetchRegisteredUsersOnEvent.pending,
        handleFetchRegistrationsPending
      )
      .addCase(
        fetchRegisteredUsersOnEvent.rejected,
        handleFetchRegistrationsRejected
      )
      .addCase(
        fetchRegisteredUsersOnEvent.fulfilled,
        handleFetchRegistrationsFulfilled
      );
  },
});

export const registrationsReducer = registrationSlice.reducer;
