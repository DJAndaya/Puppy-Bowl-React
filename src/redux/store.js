import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import puppyApi from "./puppyApi"

const store = configureStore({
  reducer: {
    puppyApi: puppyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(puppyApi.middleware)
  }
})

export default store

window.store = store