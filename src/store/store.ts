import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CoinAPI } from "../services/CoinService";
import { postAPI } from "../services/PostService";

const rootReducer = combineReducers({
	[CoinAPI.reducerPath]: CoinAPI.reducer,
	[postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CoinAPI.middleware).concat(postAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']