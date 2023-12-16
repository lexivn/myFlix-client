import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";

// Registering the Movies Reducer
export const store = configureStore({
  reducer: { movies: moviesReducer}
});