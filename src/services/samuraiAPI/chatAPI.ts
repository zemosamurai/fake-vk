import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

export type MessageType = {
	message: string
	photo: string
	userId: number
	userName: string
}

let socket: WebSocket | null
const getSocket = () => {
	if (!socket) {
		socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
	}

	return socket
}

export const chatAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getDevChatMessages: build.query<MessageType[], void>({
			queryFn: () => ({ data: [] }),
			keepUnusedDataFor: 100000,
			async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
				const ws = getSocket()

				try {
					await cacheDataLoaded

					const listener = (event: MessageEvent) => {
						const data = JSON.parse(event.data)
						// if (!isMessage(data) || data.channel !== arg) return

						updateCachedData((draft) => {
							draft.push(...data)
						})
					}

					ws.addEventListener('message', listener)
				} catch (e) {
					console.log('error websocket')
				}

				await cacheEntryRemoved

				ws.close()
			},
		}),
		sendChatDevMessage: build.mutation<Promise<string>, string>({
			queryFn: (message) => {
				const ws = getSocket()

				return new Promise(() => {
					ws.send(message)
				})
			},
		}),
	}),
})

export const { useGetDevChatMessagesQuery, useSendChatDevMessageMutation } = chatAPI
