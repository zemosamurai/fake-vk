import { useEffect, useState } from 'react'

import { Container } from 'src/common/components'
import { AddMessageForm } from 'src/common/components/AddMessageForm/AddMessageForm.tsx'

import { Messages } from 'src/features/messages/Messages.tsx'

export type ChatMessageType = {
	message: string
	photo: string
	userId: number
	userName: string
}

// export let wsChanel: WebSocket
//
// const createChanel = () => {
// 	wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
// }

export const Chat = () => {
	const [wsChanel, setWsChanel] = useState<WebSocket | null>(null)

	useEffect(() => {
		let ws: WebSocket

		const closeHandlerWs = () => {
			setTimeout(createChanel, 3000)
		}

		const createChanel = () => {
			ws?.removeEventListener('close', closeHandlerWs)
			ws?.close()

			ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
			ws.addEventListener('close', closeHandlerWs)
			setWsChanel(ws)
		}

		createChanel()

		return () => {
			ws.removeEventListener('close', closeHandlerWs)
			ws.close()
		}
	}, [])

	return (
		<Container>
			<Messages wsChanel={wsChanel} />
			<AddMessageForm wsChanel={wsChanel} />
		</Container>
	)
}
