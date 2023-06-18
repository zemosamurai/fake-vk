import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { GetProfileType, PhotosType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type RequestUpdateParam = Omit<GetProfileType, 'photos'>

const profileAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<GetProfileType, number>({
			query: (userId) => ({
				url: `profile/${userId}`,
			}),
			providesTags: ['Profile'],
		}),

		updateProfile: build.mutation<ResponseType, RequestUpdateParam>({
			query: (arg) => ({
				url: `profile`,
				method: 'PUT',
				body: arg,
			}),
			invalidatesTags: ['Profile'],
		}),

		getStatus: build.query<string | null, number>({
			query: (userId) => ({
				url: `profile/status/${userId}`,
			}),
			providesTags: ['ProfileStatus'],
		}),

		updateStatus: build.mutation<ResponseType, { status: string }>({
			query: (data) => ({
				url: 'profile/status',
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['ProfileStatus'],
		}),

		savePhoto: build.mutation<ResponseType<PhotosType>, any>({
			query: (body) => {
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

export const {
	useGetProfileQuery,
	useGetStatusQuery,
	useUpdateStatusMutation,
	useSavePhotoMutation,
	useUpdateProfileMutation,
} = profileAPI
