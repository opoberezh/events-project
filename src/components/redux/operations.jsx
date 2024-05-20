import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://events-project-118c4-default-rtdb.europe-west1.firebasedatabase.app';

export const fetchEvents = createAsyncThunk(
  'events/fetchAll',
  async ({ pageSize = 12, pageNumber = 0 }, thunkAPI) => {
    try {
      const res = await axios.get('/events.json');
      const data = res.data;

      console.log('API Response:', data);

      if (!data) {
        throw new Error('No data returned from API');
      }

      // Convert Firebase's returned data object into an array
      const eventsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      // Implementing pagination
      const paginatedEvents = eventsArray.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );

      return paginatedEvents;
    } catch (error) {
      console.error('Error fetching events:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerEvent = createAsyncThunk(
  'events/registerEvent',
  async (registrationData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/events/${registrationData.eventId}/registrations.json`,
        registrationData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchParticipants = createAsyncThunk(
  'registrations/fetchParticipants',
  async (eventId, thunkAPI) => {
    try {
      const res = await axios.get(`/events/${eventId}/registrations.json`);
      const data = res.data;
      if (!data) {
        throw new Error('No Participants found');
      }
      const registrationsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      return { eventId, registrations: registrationsArray };
    } catch (error) {
      console.error('Error fetching Participants:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
