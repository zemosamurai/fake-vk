import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthMeType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export const authSlice = createSlice({
	name: 'authSlice',
	initialState: {
		authData: {} as AuthMeType,
	},
	reducers: {
		setAuthData: (state, action: PayloadAction<AuthMeType>) => {
			state.authData = action.payload
		},
	},
})

export const { setAuthData } = authSlice.actions
export const authReducer = authSlice.reducer
