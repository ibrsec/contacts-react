import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../features/loginSlice";
import contactSlice from "../features/contactSlice";

const rootReducer = combineReducers({
    login:loginSlice,
    contacts:contactSlice,

})
const persistConfig = {
    key:"contacts-login",
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);

