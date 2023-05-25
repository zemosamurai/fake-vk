import { memo } from 'react'
import { Link } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { Button } from 'src/common/components/Button/Button.ts'

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

	return (
		<Wrapper>
			<Link to={`${PATH.PROFILE}/${id}`}>
				<UserImg src={photos || baseProfilePhoto} alt="profile user" />
			</Link>
			<UserInfo>
				<Title>{name}</Title>
				<Button>{followed ? 'Unfollow' : 'Follow'}</Button>
			</UserInfo>
		</Wrapper>
	)
})
