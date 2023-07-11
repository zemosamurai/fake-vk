import { useNavigate } from 'react-router-dom'

import { Description, TextWrapper, Title, Wrapper } from './styled.ts'

type PropsType = {
	message: string
	addedAt: string
	senderName: string
}

export const DialogMessage = ({ senderName, message, addedAt }: PropsType) => {
	const navigate = useNavigate()
	const dateObject = new Date(addedAt)
	const formattedDate = `${dateObject.getDate()}-0${dateObject.getMonth() + 1}`

	const handlerNavigateToProfile = () => {
		// navigate(`${PATH.PROFILE}/${isOwner ? 'owner' : userId}`)
	}

	return (
		<Wrapper>
			<TextWrapper>
				<Title onClick={handlerNavigateToProfile}>{senderName}</Title>

				{formattedDate}
				<Description>{message}</Description>
			</TextWrapper>
		</Wrapper>
	)
}
