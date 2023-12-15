import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { productsApi } from "../services/product";
import cartReducer from "./cart";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
