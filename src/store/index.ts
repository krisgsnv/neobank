import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./stepSlice";
import prescoringReducer from "./prescoringSlice";

const store = configureStore({
  reducer: {
    step: stepReducer,
    prescoring: prescoringReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
