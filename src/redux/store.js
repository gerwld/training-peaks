import { configureStore } from "@reduxjs/toolkit"
import { mainReducer, appReducer, authReducer, statistics, plans } from "."

const store = configureStore({
 reducer: {
  app: appReducer,
  auth: authReducer,
  main: mainReducer,
  statistics,
  plans
 },
})

export default store
