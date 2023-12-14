import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "./productsApi";

import userReducer from "./slices/userSlice";

const rootReducer = {
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
