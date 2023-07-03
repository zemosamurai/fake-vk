import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

type MessageType = {
	message: string
	photo: string
	userId: number
	userName: string
}

export const chatAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getChat: build.query<MessageType[], void>({
			query: () => '',
			async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
				const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

				try {
					await cacheDataLoaded

					const listener = (event: MessageEvent) => {
						const data = JSON.parse(event.data)
						// if (!isMessage(data) || data.channel !== arg) return

						updateCachedData((draft) => {
							draft.push(data)
						})
					}

					ws.addEventListener('message', listener)
				} catch (e) {}

				await cacheEntryRemoved

				ws.close()
			},
		}),
	}),
})
