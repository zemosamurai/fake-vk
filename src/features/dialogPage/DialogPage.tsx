import { useParams } from 'react-router-dom'

import { LoaderFullWidth } from 'src/common/components'
import { AddMessageForm } from 'src/common/components/AddMessageForm/AddMessageForm.tsx'

import { DialogMessage } from 'src/features/dialogPage/DialogMessage/DialogMessage.tsx'
import { DialogPageContainer, Wrapper } from 'src/features/dialogPage/styled.ts'

import { useGetDialogMessagesQuery, useSendMessageMutation } from 'src/services/samuraiAPI/dialogsAPI.ts'

export const DialogPage = () => {
	const { userId } = useParams()
	const { data, isFetching } = useGetDialogMessagesQuery(userId as string)
	const [sendMessage] = useSendMessageMutation()

	const handlerSendMessage = (message: string) => {
		sendMessage({ userId: userId as string, message })
	}

	if (isFetching) return <LoaderFullWidth />

	return (
		<DialogPageContainer>
			<Wrapper>
				{data?.items.map((el) => (
					<DialogMessage
						key={el.id}
						userId={el.senderId}
						senderName={el.senderName}
						message={el.body}
						addedAt={el.addedAt}
					/>
				))}
			</Wrapper>
			<AddMessageForm sendMessage={handlerSendMessage} />
		</DialogPageContainer>
	)
}
