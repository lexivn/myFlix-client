// This file is going to define an action
// to store the books from the API

import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: []
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload
    }
  }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;