import { configureStore } from "@reduxjs/toolkit";
import { appReducer, authReducer } from "./";
import initialState from "./preloaded/initialState";

import { weekendsVisible, eventsById } from "./reducers/main-reducer";

const store = configureStore({
 reducer: {
  app: appReducer,
  auth: authReducer,
  weekendsVisible,
  eventsById,
 },
//  preloadedState: initialState,
});

export default store;
