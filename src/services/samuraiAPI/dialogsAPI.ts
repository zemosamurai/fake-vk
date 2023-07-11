import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'
import { DialogType, MessagesType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const dialogsAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getDialogs: build.query<DialogType[], void>({
			query: () => ({
				url: 'dialogs',
			}),
		}),
		getDialogMessages: build.query<MessagesType, string>({
			query: (userId) => ({
				url: `dialogs/${userId}/messages`,
			}),
		}),
	}),
})

export const { useGetDialogsQuery, useGetDialogMessagesQuery } = dialogsAPI
