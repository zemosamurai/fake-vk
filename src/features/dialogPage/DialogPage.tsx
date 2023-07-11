import { useParams } from 'react-router-dom'

import { LoaderFullWidth } from 'src/common/components'
import { AddMessageForm } from 'src/common/components/AddMessageForm/AddMessageForm.tsx'

import { DialogMessage } from 'src/features/dialogPage/DialogMessage/DialogMessage.tsx'
import { DialogPageContainer, Wrapper } from 'src/features/dialogPage/styled.ts'

import { useGetDialogMessagesQuery } from 'src/services/samuraiAPI/dialogsAPI.ts'

export const DialogPage = () => {
	const { userId } = useParams()
	const { data, isFetching } = useGetDialogMessagesQuery(userId as string)

	const handlerSendMessage = (message: string) => {
		console.log(message)
	}

	if (isFetching) return <LoaderFullWidth />

	return (
		<DialogPageContainer>
			<Wrapper>
				{data?.items.map((el) => (
					<DialogMessage key={el.id} senderName={el.senderName} message={el.body} addedAt={el.addedAt} />
				))}
			</Wrapper>
			<AddMessageForm sendMessage={handlerSendMessage} />
		</DialogPageContainer>
	)
}
