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
			providesTags: ['CurrentDialogMessages'],
		}),
		sendMessage: build.mutation<MessagesType, { userId: string; message: string }>({
			query: (data) => ({
				method: 'POST',
				url: `dialogs/${data.userId}/messages`,
				body: {
					body: data.message,
				},
			}),
			invalidatesTags: ['CurrentDialogMessages'],
		}),
	}),
})

export const { useGetDialogsQuery, useGetDialogMessagesQuery, useSendMessageMutation } = dialogsAPI
