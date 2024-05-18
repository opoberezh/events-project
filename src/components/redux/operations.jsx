import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://events-project-118c4-default-rtdb.europe-west1.firebasedatabase.app';

export const registerEvent = createAsyncThunk(
  'registrations/registerEvent',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/users/registrations.json', formData);
      return { id: res.data.name, ...formData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
