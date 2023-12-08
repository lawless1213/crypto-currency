import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CoinAPI } from "../services/CoinService";
import SettingsReducer from "./reducers/settingsSlice";
import TablesParamsReducer from "./reducers/tablesParamsSlice";

const rootReducer = combineReducers({
	SettingsReducer,
	TablesParamsReducer,
	[CoinAPI.reducerPath]: CoinAPI.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoinAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']