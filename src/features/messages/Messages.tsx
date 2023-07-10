import { UIEvent, useEffect, useRef, useState } from 'react'

import { Message } from 'src/features/messages/message/Message.tsx'
import { AnchorDiv, Wrapper } from 'src/features/messages/styled.ts'

import { MessageType } from 'src/services/samuraiAPI/chatAPI.ts'

type PropsType = {
	messagesData: MessageType[]
}

export const Messages = ({ messagesData }: PropsType) => {
	const anchorRef = useRef<HTMLDivElement>(null)
	const [isAutoScroll, setIsAutoScroll] = useState(true)

	useEffect(() => {
		if (isAutoScroll) {
			anchorRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messagesData])

	const handlerScroll = (e: UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget
		if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
			setIsAutoScroll(true)
		} else {
			setIsAutoScroll(false)
		}
	}

	return (
		<Wrapper onScroll={handlerScroll}>
			{messagesData?.map((el, i) => (
				<Message key={i} userId={el.userId} userName={el.userName} message={el.message} photo={el.photo} />
			))}
			<AnchorDiv ref={anchorRef} />
		</Wrapper>
	)
}
