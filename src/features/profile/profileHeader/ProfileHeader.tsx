import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

import {
	Button,
	ButtonEdit,
	Container,
	ImgCover,
	ProfileImg,
	ProfileInfo,
	ProfileWrapper,
	Subtitle,
	Title,
} from './styled.ts'

type PropsType = {
	userId: number
}

export const ProfileHeader = ({ userId }: PropsType) => {
	const { data: dataStatus } = useGetStatusQuery(userId)
	const { data: dataProfile } = useGetProfileQuery(userId)

	return (
		<Container>
			<ImgCover>
				<ButtonEdit>Edit cover</ButtonEdit>
			</ImgCover>
			<ProfileInfo>
				<ProfileImg src={baseProfilePhoto} />
				<ProfileWrapper>
					<div>
						<Title>{dataProfile?.fullName}</Title>
						<Subtitle>{dataStatus}</Subtitle>
					</div>
					<Button>Edit profile info</Button>
				</ProfileWrapper>
			</ProfileInfo>
		</Container>
	)
}
