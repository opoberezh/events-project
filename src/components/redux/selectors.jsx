export const selectEvents = (state) => state.events.items;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectError = (state) => state.events.error;
export const selectRegistrations = (state) => state.registrations.items;
export const selectIsLoadingRegistrations = (state) =>
  state.registrations.isLoading;
export const selectErrorRegistrations = (state) => state.registrations.error;
export const selectParticipants = (state) => state.registrations.items;
export const selectLoading = (state) => state.registrations.loading;
export const selectParticipantsError = (state) => state.registrations.error;
