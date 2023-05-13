import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

const rootReducer = combineReducers({
	[samuraiAPI.reducerPath]: samuraiAPI.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(samuraiAPI.middleware),
})
