import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { GetUsersParamsType, GetUsersType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export const usersAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<GetUsersType, GetUsersParamsType>({
			query: (arg) => ({
				url: 'users',
				params: arg,
			}),
			providesTags: ['Users'],
			keepUnusedDataFor: 600,
		}),

		follow: build.mutation<ResponseType, number>({
			query: (userId) => ({
				url: `follow/${userId}`,
				method: 'POST',
			}),
		}),

		unFollow: build.mutation<ResponseType, number>({
			query: (userId) => ({
				url: `follow/${userId}`,
				method: 'DELETE',
			}),
		}),
	}),
})

export const { useGetUsersQuery, useFollowMutation, useUnFollowMutation } = usersAPI
