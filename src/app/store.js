import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../features/loginSlice";

const rootReducer = combineReducers({
    login:loginSlice,

})
const persistConfig = {
    key:"contacts-login",
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store =  configureStore({
    reducer: persistedReducer

})

export const persistor = persistStore(store);

