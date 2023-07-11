import { useNavigate } from 'react-router-dom'

import baseAvatar from 'src/assets/image/camera-200.png'

import {
	Avatar,
	Container,
	DataContainer,
	Description,
	DescriptionActive,
	FlexWrapper,
	Title,
} from 'src/features/dialogs/dialog/styled.ts'

import { PATH } from 'src/pages/path.ts'

import { DialogType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type PropsType = {
	dialogData: DialogType
}

export const Dialog = ({ dialogData }: PropsType) => {
	const { id, userName, hasNewMessages, photos, newMessagesCount, lastDialogActivityDate } = dialogData
	const navigate = useNavigate()

	const dateObject = new Date(lastDialogActivityDate)
	const formattedDate = `${dateObject.getDate()}-0${dateObject.getMonth() + 1}`

	const handlerNavigateToMassage = () => {
		navigate(`${PATH.DIALOG_PAGE}/${id}`)
	}

	return (
		<Container onClick={handlerNavigateToMassage}>
			<Avatar src={photos.small || baseAvatar} alt="avatar" />

			<DataContainer>
				<FlexWrapper>
					<Title>{userName}</Title>
					<Description>{formattedDate}</Description>
				</FlexWrapper>

				{hasNewMessages && <DescriptionActive>{`new messages (${newMessagesCount})`}</DescriptionActive>}
				{!hasNewMessages && <Description>old messages</Description>}
			</DataContainer>
		</Container>
	)
}
