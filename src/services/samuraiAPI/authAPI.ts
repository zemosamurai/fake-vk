import { setAuthData } from 'src/features/auth/authSlice.ts'

import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { AuthMeType, LoginParamsType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const authAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		authMe: build.query<ResponseType<AuthMeType>, void>({
			query: () => ({
				url: 'auth/me',
			}),
			providesTags: ['Auth'],
			async onQueryStarted(_, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled

					dispatch(setAuthData(data.data))
				} catch (err) {
					console.log(err)
				}
			},
		}),

		login: build.mutation<ResponseType<{ userId: number }>, LoginParamsType>({
			query: (arg) => ({
				url: 'auth/login',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: ['Auth'],
		}),

		logOut: build.mutation<ResponseType, void>({
			query: () => ({
				url: 'auth/login',
				method: 'DELETE',
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
})

export const { useAuthMeQuery, useLoginMutation, useLogOutMutation } = authAPI
