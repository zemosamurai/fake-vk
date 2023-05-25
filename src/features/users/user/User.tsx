import { useState } from 'react'
import { Link } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { FollowIcon, ImageProfile, Title, UnfollowIcon, UserDataWrapper } from 'src/features/users/user/styled.ts'

import { PATH } from 'src/pages/path.ts'

import { useFollowMutation, useUnFollowMutation } from 'src/services/samuraiAPI/usersAPI.ts'

type PropsType = {
	id: number
	name: string
	photos: string | null
	followed: boolean
}

export const User = ({ id, name, photos, followed }: PropsType) => {
	const [isFollow, setIsFollow] = useState(followed)
	const [follow] = useFollowMutation()
	const [unFollow] = useUnFollowMutation()

	const handlerFollow = () => {
		follow(id)
			.unwrap()
			.then(() => {
				setIsFollow(true)
			})
	}
	const handlerUnfollow = () => {
		unFollow(id)
			.unwrap()
			.then(() => {
				setIsFollow(false)
			})
	}

	return (
		<div>
			<Link to={`${PATH.PROFILE}/${id}`}>
				<ImageProfile src={photos || baseProfilePhoto} alt="profile image" />
			</Link>
			<UserDataWrapper>
				<Title>{name}</Title>
				{!isFollow ? <FollowIcon onClick={handlerFollow} /> : <UnfollowIcon onClick={handlerUnfollow} />}
			</UserDataWrapper>
		</div>
	)
}
