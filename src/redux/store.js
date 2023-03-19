import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import { weekendsVisible, eventsById } from "./reducers/main-reducer";

const store = configureStore({
 reducer: {
  app: appReducer,
  auth: authReducer,
  weekendsVisible,
  eventsById,
 },
});

export default store;
