import { configureStore } from "@reduxjs/toolkit";
import initialState from "./preloaded/preloadedState";
import aprReducer from "./reducers/apr-reducer";
import authReducer from "./reducers/auth-reducer";
import { weekendsVisible, eventsById } from "./reducers/main-reducer";


const store = configureStore({
 reducer: {
  apr: aprReducer,
  auth: authReducer,
  weekendsVisible,
  eventsById,
  
 },
 preloadedState: initialState,
});

export default store;
