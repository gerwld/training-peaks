import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/app-reducer"
import authReducer from "./reducers/auth-reducer"
import { mainReducer } from "./reducers/main-reducer"
import statistics from "./reducers/statistics"
import plans from "./reducers/plans"

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
