import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'src/app/appSlice.ts'

import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

const rootReducer = combineReducers({
	[samuraiAPI.reducerPath]: samuraiAPI.reducer,
	app: appReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(samuraiAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
