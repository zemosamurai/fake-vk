import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { Button } from 'src/common/components'
import { Container } from 'src/common/components'
import { useFollowUnfollowUser } from 'src/common/hooks'
import { getFromLocalStorage } from 'src/common/utils/getLocalStorage.ts'

import { PATH } from 'src/pages/path.ts'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

import { ProfileImg, ProfileInfo, ProfileWrapper, Subtitle, Title, WrapperInfo } from './styled.ts'

type PropsType = {
	userId: number
	isOwner: boolean
}

export const ProfileHeader = memo(({ userId, isOwner }: PropsType) => {
	const navigate = useNavigate()
	const isFollowCurrentUser = getFromLocalStorage('isFollowCurrentUser')
	const { isFollow, handlerFollow, handlerUnfollow } = useFollowUnfollowUser({
		userId: userId,
		followed: isFollowCurrentUser,
	})
	const { data: dataStatus } = useGetStatusQuery(userId)
	const { data: dataProfile } = useGetProfileQuery(userId)

	const handlerNavigateToEdit = () => {
		navigate(PATH.PROFILE_EDIT)
	}

	return (
		<Container>
			<ProfileInfo>
				<ProfileImg src={dataProfile?.photos.large || baseProfilePhoto} />
				<ProfileWrapper>
					<WrapperInfo>
						<Title>{dataProfile?.fullName}</Title>
						{dataStatus && <Subtitle>{dataStatus}</Subtitle>}
					</WrapperInfo>
					{isOwner && <Button onClick={handlerNavigateToEdit}>Edit profile</Button>}
					{!isOwner && isFollow && <Button onClick={handlerUnfollow}>Unfollow</Button>}
					{!isOwner && !isFollow && <Button onClick={handlerFollow}>Follow</Button>}
				</ProfileWrapper>
			</ProfileInfo>
		</Container>
	)
})
