import { LoaderFullWidth } from 'src/common/components'
import { AddMessageForm } from 'src/common/components/AddMessageForm/AddMessageForm.tsx'
import { useAutoScroll } from 'src/common/hooks/useAutoScroll.ts'

import { ChatContainer, Wrapper } from 'src/features/chat/styled.ts'
import { Message } from 'src/features/message/Message.tsx'

import { useGetDevChatMessagesQuery, useSendChatDevMessageMutation } from 'src/services/samuraiAPI/chatAPI.ts'

export const Chat = () => {
	const { data, isFetching } = useGetDevChatMessagesQuery()
	const [sendMessage] = useSendChatDevMessageMutation()
	const { anchorRef, handlerScroll } = useAutoScroll(data)

	if (isFetching || !data) return <LoaderFullWidth />

	return (
		<ChatContainer>
			<Wrapper onScroll={handlerScroll}>
				{data?.map((el, i) => (
					<Message key={i} userId={el.userId} userName={el.userName} message={el.message} photo={el.photo} />
				))}
				<div ref={anchorRef} />
			</Wrapper>

			<AddMessageForm sendMessage={sendMessage} />
		</ChatContainer>
	)
}
