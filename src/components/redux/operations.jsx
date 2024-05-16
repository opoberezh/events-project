import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://events-project-74ec9-default-rtdb.europe-west1.firebasedatabase.app';

export const registerEvent = createAsyncThunk(
  'registrations/registerEvent',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/registrations.json', formData);
      return { id: res.data.name, ...formData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchEvents = createAsyncThunk(
  'events/fetchAll',
  async (credentials, thunkAPI) => {
    const { limit = 12, page = 1 } = credentials;
    try {
      const res = await axios.get('/events');
      const data = res.data;

      // Convert Firebase's returned data object into an array
      const eventsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      // Implementing pagination
      const paginatedEvents = eventsArray.slice(
        (page - 1) * limit,
        page * limit
      );

      return paginatedEvents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
