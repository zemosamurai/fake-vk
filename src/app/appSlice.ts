import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ThemeType = 'light' | 'dark'

export const appSlice = createSlice({
	name: 'appSlice',
	initialState: {
		theme: 'light' as ThemeType,
	},
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeType>) => {
			state.theme = action.payload
		},
	},
})

export const appReducer = appSlice.reducer
