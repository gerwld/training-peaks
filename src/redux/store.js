import { configureStore } from "@reduxjs/toolkit";
import initialState from "./preloaded/preloadedState";
import aprReducer from "./reducers/apr-reducer";


const store = configureStore({
 reducer: {
  apr: aprReducer,
 },
 preloadedState: initialState,
});

export default store;
