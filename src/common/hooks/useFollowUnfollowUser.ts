import { useState } from 'react'
import { toast } from 'react-toastify'

import { saveToLocalStorage } from 'src/common/utils/saveLocalStorage.ts'

import { useFollowMutation, useUnFollowMutation } from 'src/services/samuraiAPI/usersAPI.ts'

type PropsType = {
	userId: number
	followed: boolean
}

/**
Custom hook that allows following and unfollowing a user.
 - param - The props object:
 - userId (number) - id of the user to follow or unfollow.
 - followed (boolean) - Whether the user is already followed or not.
@returns Object :
 - isFollow - The current follow status of the user.
 - handlerFollow - A function to follow the user.
 - handlerUnfollow - A function to unfollow the user.
 */

export const useFollowUnfollowUser = ({ followed, userId }: PropsType) => {
	const [isFollow, setIsFollow] = useState(followed)
	const [follow, { data: dataFollow }] = useFollowMutation()
	const [unFollow, { data: dataUnfollow }] = useUnFollowMutation()

	const handlerFollow = () => {
		follow(userId)
			.unwrap()
			.then(() => {
				saveToLocalStorage('isFollowCurrentUser', true)
				setIsFollow(true)
			})
			.catch(() => {
				toast.error('unexpected error')
			})
	}
	const handlerUnfollow = () => {
		unFollow(userId)
			.unwrap()
			.then(() => {
				saveToLocalStorage('isFollowCurrentUser', false)
				setIsFollow(false)
			})
			.catch(() => {
				toast.error('unexpected error')
			})
	}

	if (dataFollow?.resultCode === 1 || dataUnfollow?.resultCode === 1) {
		const errorMessage = dataFollow?.messages[0]
		toast.error(errorMessage)
	}

	return {
		isFollow,
		handlerFollow,
		handlerUnfollow,
	}
}
