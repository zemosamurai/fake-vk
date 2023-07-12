import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'src/common/hooks'

import { PATH } from 'src/pages/path.ts'

import { Description, DescriptionTime, FlexContainer, TextWrapper, Title, Wrapper } from './styled.ts'

type PropsType = {
	message: string
	addedAt: string
	senderName: string
	userId: number
}

export const DialogMessage = memo(({ senderName, message, addedAt, userId }: PropsType) => {
	const navigate = useNavigate()
	const ownerId = useAppSelector((state) => state.auth.authData.id)
	const isOwner = ownerId === userId

	const dateObject = new Date(addedAt)
	const formattedDate = `${dateObject.getDate()}-0${dateObject.getMonth() + 1}`

	const handlerNavigateToProfile = () => {
		navigate(`${PATH.PROFILE}/${isOwner ? 'owner' : userId}`)
	}

	return (
		<Wrapper>
			<TextWrapper>
				<FlexContainer>
					<Title onClick={handlerNavigateToProfile}>{senderName}</Title>
					<DescriptionTime>{formattedDate}</DescriptionTime>
				</FlexContainer>

				<Description>{message}</Description>
			</TextWrapper>
		</Wrapper>
	)
})
