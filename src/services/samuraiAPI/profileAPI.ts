import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { GetProfileType, PhotosType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const profileAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<GetProfileType, number>({
			query: (userId) => ({
				url: `profile/${userId}`,
			}),
			providesTags: ['Profile'],
		}),

		getStatus: build.query<string | null, number>({
			query: (userId) => ({
				url: `profile/status/${userId}`,
			}),
		}),

		updateStatus: build.mutation<ResponseType, { status: string }>({
			query: (data) => ({
				url: 'profile/status',
				method: 'PUT',
				body: data,
			}),
		}),

		savePhoto: build.mutation<ResponseType<PhotosType>, any>({
			query: (body) => {
				console.log(body)
				return {
					url: 'profile/photo',
					method: 'PUT',
					body,
				}
			},
			invalidatesTags: ['Profile'],
		}),
	}),
})

export const { useGetProfileQuery, useGetStatusQuery, useUpdateStatusMutation, useSavePhotoMutation } = profileAPI
