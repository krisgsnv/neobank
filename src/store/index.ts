import {
  type AnyAction,
  type Reducer,
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import applicationReducer from "./applicationSlice";
import prescoringReducer from "./prescoringSlice";

const appReducer = combineReducers({
  application: applicationReducer,
  prescoring: prescoringReducer
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "application/clear") {
    void storage.removeItem("persist:root");
    state = {} satisfies RootState;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
