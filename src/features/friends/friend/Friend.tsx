import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { Button } from 'src/common/components/Button/Button.ts'
import { useFollowUnfollowUser } from 'src/common/hooks'
import { saveToLocalStorage } from 'src/common/utils/saveLocalStorage.ts'

import { Title, UserImg, UserInfo, Wrapper } from 'src/features/friends/friend/styled.ts'

import { PATH } from 'src/pages/path.ts'

type PropsType = {
	name: string
	id: number
	followed: boolean
	photos: null | string
}

export const Friend = memo((props: PropsType) => {
	const { followed, photos, name, id } = props
	const navigate = useNavigate()
	const { isFollow, handlerFollow, handlerUnfollow } = useFollowUnfollowUser({ userId: id, followed })

	const handlerNavigateToProfile = () => {
		saveToLocalStorage('isFollowCurrentUser', isFollow)
		navigate(`${PATH.PROFILE}/${id}`)
	}

	return (
		<Wrapper>
			<button onClick={handlerNavigateToProfile}>
				<UserImg src={photos || baseProfilePhoto} alt="profile user" />
			</button>
			<UserInfo>
				<Title>{name}</Title>
				{isFollow && <Button onClick={handlerUnfollow}>Unfollow</Button>}
				{!isFollow && <Button onClick={handlerFollow}>Follow</Button>}
			</UserInfo>
		</Wrapper>
	)
})
