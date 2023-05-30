import { memo } from 'react'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { Button } from 'src/common/components'
import { Container } from 'src/common/components'
import { useFollowUnfollowUser } from 'src/common/hooks'
import { getFromLocalStorage } from 'src/common/utils/getLocalStorage.ts'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

import { ProfileImg, ProfileInfo, ProfileWrapper, Subtitle, Title } from './styled.ts'

type PropsType = {
	userId: number
	isOwner: boolean
}

export const ProfileHeader = memo(({ userId, isOwner }: PropsType) => {
	const isFollowCurrentUser = getFromLocalStorage('isFollowCurrentUser')
	const { isFollow, handlerFollow, handlerUnfollow } = useFollowUnfollowUser({
		userId: userId,
		followed: isFollowCurrentUser,
	})
	const { data: dataStatus } = useGetStatusQuery(userId)
	const { data: dataProfile } = useGetProfileQuery(userId)

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
					{!isOwner && isFollow && <Button onClick={handlerUnfollow}>Unfollow</Button>}
					{!isOwner && !isFollow && <Button onClick={handlerFollow}>Follow</Button>}
				</ProfileWrapper>
			</ProfileInfo>
		</Container>
	)
})
