import { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
	wsChanel: WebSocket | null
}

export const AddMessageForm = ({ wsChanel }: PropsType) => {
	const [message, setMessage] = useState('')
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

	const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.currentTarget.value)
	}

	useEffect(() => {
		const openHandler = () => {
			setReadyStatus('ready')
		}

		wsChanel?.addEventListener('open', openHandler)

		return () => {
			wsChanel?.removeEventListener('open', openHandler)
		}
	}, [wsChanel])

	const handlerSendMessage = () => {
		if (message) {
			wsChanel?.send(message)
			setMessage('')
		}
	}

	return (
		<div>
			<input value={message} onChange={handlerChangeInput} placeholder={'add message'} />
			<button disabled={!wsChanel && readyStatus !== 'ready'} onClick={handlerSendMessage}>
				send message
			</button>
		</div>
	)
}
