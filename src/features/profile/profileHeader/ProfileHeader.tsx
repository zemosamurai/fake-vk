import { useParams } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { Button } from 'src/common/components'
import { Container } from 'src/common/components'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

import { ProfileImg, ProfileInfo, ProfileWrapper, Subtitle, Title } from './styled.ts'

type PropsType = {
	ownerId: number
}

export const ProfileHeader = ({ ownerId }: PropsType) => {
	const { userId } = useParams()
	const isOwner = userId === 'owner'
	const currentId = isOwner ? ownerId : Number(userId)

	const { data: dataStatus } = useGetStatusQuery(currentId)
	const { data: dataProfile } = useGetProfileQuery(currentId)

	return (
		<Container>
			<ProfileInfo>
				<ProfileImg src={dataProfile?.photos.large || baseProfilePhoto} />
				<ProfileWrapper>
					<div>
						<Title>{dataProfile?.fullName}</Title>
						{dataStatus && <Subtitle>{dataStatus}</Subtitle>}
					</div>
					{isOwner && <Button>Edit profile info</Button>}
					{!isOwner && <Button>Add friend</Button>}
				</ProfileWrapper>
			</ProfileInfo>
		</Container>
	)
}
