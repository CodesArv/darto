import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import index from "../stores/index";

const persistConfig = {
  key: "root",
  storage: storage,
};

const appReducer = (state, action) => {
  if (action.type === "SIGNOUT") {
    storage.removeItem("persist:root");

    return index(undefined, action);
  }
  return index(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
