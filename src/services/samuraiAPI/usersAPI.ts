import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { GetUsersParamsType, GetUsersType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const usersAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<GetUsersType, GetUsersParamsType>({
			query: (arg) => ({
				url: 'users',
				params: arg,
			}),
		}),

		follow: build.mutation<ResponseType, number>({
			query: (userId) => ({
				url: 'follow/',
				method: 'POST',
				uri: userId,
			}),
		}),

		unFollow: build.mutation<ResponseType, number>({
			query: (userId) => ({
				url: 'follow/',
				method: 'DELETE',
				uri: userId,
			}),
		}),
	}),
})

export const { useGetUsersQuery, useFollowMutation, useUnFollowMutation } = usersAPI
