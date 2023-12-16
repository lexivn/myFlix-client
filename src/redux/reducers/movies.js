// This file is going to define an action
// to store the books from the API

// The movies Reducer: This file is going to define an action to store the books from the API
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    filter: ""
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { setMovies, setFilter } = moviesSlice.actions;
export default moviesSlice.reducer;