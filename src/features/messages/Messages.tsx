import { useEffect, useState } from 'react'

import { ChatMessageType } from 'src/features/chat/Chat.tsx'
import { Message } from 'src/features/messages/message/Message.tsx'

type PropsType = {
	wsChanel: WebSocket | null
}

export const Messages = ({ wsChanel }: PropsType) => {
	const [messages, setMessages] = useState<ChatMessageType[]>([])

	// const data = [
	// 	{
	// 		message: 'hello World',
	// 		photo: 'https://placehold.co/50',
	// 		userId: 1,
	// 		userName: 'Dimych',
	// 	},
	// 	{
	// 		message: 'hello World',
	// 		photo: 'https://placehold.co/50',
	// 		userId: 2,
	// 		userName: 'Dimych',
	// 	},
	// 	{
	// 		message: 'hello World',
	// 		photo: 'https://placehold.co/50',
	// 		userId: 3,
	// 		userName: 'Dimych',
	// 	},
	// 	{
	// 		message: 'hello World',
	// 		photo: 'https://placehold.co/50',
	// 		userId: 4,
	// 		userName: 'Dimych',
	// 	},
	// ]

	useEffect(() => {
		const messageHandler = (e: MessageEvent) => {
			const newMessages = JSON.parse(e.data)
			setMessages((prev) => [...prev, ...newMessages])
		}

		wsChanel?.addEventListener('message', messageHandler)

		return () => {
			wsChanel?.removeEventListener('message', messageHandler)
		}
	}, [wsChanel])

	return (
		<div>
			{messages.map((el, i) => (
				<Message key={i} userName={el.userName} message={el.message} photo={el.photo} />
			))}
		</div>
	)
}
