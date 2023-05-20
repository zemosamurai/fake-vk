import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { GetProfileType, PhotosType, ResponseType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const profileAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<GetProfileType, number>({
			query: (userId) => ({
				url: `profile/${userId}`,
			}),
		}),

		getStatus: build.query<string | null, number>({
			query: (userId) => ({
				url: `profile/status/${userId}`,
			}),
		}),

		updateStatus: build.mutation<ResponseType, string>({
			query: (status) => ({
				url: 'profile/status',
				method: 'PUT',
				body: { status },
			}),
		}),

		savePhoto: build.mutation<ResponseType<PhotosType>, File>({
			query: (photoFile) => {
				const formData = new FormData()
				formData.append('image', photoFile)

				return {
					url: 'profile/status',
					method: 'PUT',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					body: formData,
				}
			},
		}),
	}),
})

export const {
	useLazyGetProfileQuery,
	useGetProfileQuery,
	useGetStatusQuery,
	useUpdateStatusMutation,
	useSavePhotoMutation,
} = profileAPI
