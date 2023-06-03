import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'src/app/appSlice.ts'

import { saveToLocalStorage } from 'src/common/utils/saveLocalStorage.ts'

import { authReducer } from 'src/features/auth/authSlice.ts'

import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

const rootReducer = combineReducers({
	[samuraiAPI.reducerPath]: samuraiAPI.reducer,
	auth: authReducer,
	app: appReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(samuraiAPI.middleware),
})

store.subscribe(() => {
	saveToLocalStorage('theme', store.getState().app.theme)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
