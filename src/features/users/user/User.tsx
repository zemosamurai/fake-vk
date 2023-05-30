import { useNavigate } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { useFollowUnfollowUser } from 'src/common/hooks'
import { saveToLocalStorage } from 'src/common/utils/saveLocalStorage.ts'

import { FollowIcon, ImageProfile, Title, UnfollowIcon, UserDataWrapper } from 'src/features/users/user/styled.ts'

import { PATH } from 'src/pages/path.ts'

type PropsType = {
	id: number
	name: string
	photos: string | null
	followed: boolean
}

export const User = ({ id, name, photos, followed }: PropsType) => {
	const navigate = useNavigate()

	const { isFollow, handlerFollow, handlerUnfollow } = useFollowUnfollowUser({ userId: id, followed })

	const handlerNavigateToProfile = () => {
		saveToLocalStorage('isFollowCurrentUser', isFollow)
		navigate(`${PATH.PROFILE}/${id}`)
	}

	return (
		<div>
			<button onClick={handlerNavigateToProfile}>
				<ImageProfile src={photos || baseProfilePhoto} alt="profile image" />
			</button>
			<UserDataWrapper>
				<Title>{name}</Title>
				{isFollow && <UnfollowIcon onClick={handlerUnfollow} />}
				{!isFollow && <FollowIcon onClick={handlerFollow} />}
			</UserDataWrapper>
		</div>
	)
}
