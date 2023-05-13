import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { AuthMeType, LoginParamsType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const authAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		authMe: build.query<ResponseType<AuthMeType>, void>({
			query: () => ({
				url: 'auth/me',
			}),
		}),

		login: build.mutation<ResponseType<{ userId: number }>, LoginParamsType>({
			query: (arg) => ({
				url: 'auth/login',
				method: 'POST',
				body: arg,
			}),
		}),

		logOut: build.mutation<ResponseType, void>({
			query: () => ({
				url: 'auth/login',
				method: 'DELETE',
			}),
		}),
	}),
})

export const { useAuthMeQuery, useLoginMutation, useLogOutMutation } = authAPI
