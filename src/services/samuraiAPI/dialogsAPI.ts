import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

const dialogsAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getDialogs: build.query<any, void>({
			query: () => ({
				url: 'dialogs',
			}),
		}),
	}),
})

export const { useGetDialogsQuery } = dialogsAPI
