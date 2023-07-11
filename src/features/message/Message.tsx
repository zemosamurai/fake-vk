import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import basePhoto from 'src/assets/image/camera-200.png'

import { useAppSelector } from 'src/common/hooks'

import { Description, ProfileImage, TextWrapper, Title, Wrapper } from 'src/features/message/styled.ts'

import { PATH } from 'src/pages/path.ts'

type PropsType = {
	userId: number
	message: string
	photo?: string
	userName: string
}

export const Message = memo(({ message, userName, photo, userId }: PropsType) => {
	const navigate = useNavigate()
	const ownerId = useAppSelector((state) => state.auth.authData.id)
	const isOwner = ownerId === userId

	const handlerNavigateToProfile = () => {
		navigate(`${PATH.PROFILE}/${isOwner ? 'owner' : userId}`)
	}

	return (
		<Wrapper>
			<ProfileImage src={photo || basePhoto} alt={'user photo'} onClick={handlerNavigateToProfile} />
			<TextWrapper>
				<Title onClick={handlerNavigateToProfile}>{userName}</Title>
				<Description>{message}</Description>
			</TextWrapper>
		</Wrapper>
	)
})
