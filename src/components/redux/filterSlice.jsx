import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: 'filter',
  initialState:{
    fullName: "",
    email: ""
  },
  reducers: {
    setFilter(state, action) {
      state.fullName = action.payload.fullName || "";
      state.email = action.payload.email || "";
    },
  },
});

export const {setFilter} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;