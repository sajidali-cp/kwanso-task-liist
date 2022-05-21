import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import taskReducer from "./reducers/taskReducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["task"],
};

const reducers = combineReducers({
  task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
