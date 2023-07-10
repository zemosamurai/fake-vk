import { LoaderFullWidth } from 'src/common/components'
import { AddMessageForm } from 'src/common/components/AddMessageForm/AddMessageForm.tsx'

import { ChatContainer } from 'src/features/chat/styled.ts'
import { Messages } from 'src/features/messages/Messages.tsx'

import { useGetDevChatMessagesQuery } from 'src/services/samuraiAPI/chatAPI.ts'

export const Chat = () => {
	const { data, isFetching } = useGetDevChatMessagesQuery()

	if (isFetching || !data) return <LoaderFullWidth />

	return (
		<ChatContainer>
			<Messages messagesData={data} />
			<AddMessageForm />
		</ChatContainer>
	)
}
