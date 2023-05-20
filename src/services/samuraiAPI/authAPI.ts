import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { AuthMeType, LoginParamsType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const authAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		authMe: build.query<ResponseType<AuthMeType>, void>({
			query: () => ({
				url: 'auth/me',
			}),
			providesTags: ['Auth'],
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
