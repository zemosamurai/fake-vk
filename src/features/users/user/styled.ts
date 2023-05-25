import styled from 'styled-components'

import { ReactComponent as Follow } from 'src/assets/icon/addFriend.svg'
import { ReactComponent as Unfollow } from 'src/assets/icon/unfollowFriend.svg'

export const ImageProfile = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px;
`

export const UserDataWrapper = styled.div`
	margin-top: 10px;
	padding: 0 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.p`
	color: ${({ theme }) => theme.colors.font.friend_name};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	font-size: ${({ theme }) => theme.sizes.font.l};
`

export const FollowIcon = styled(Follow)`
	fill: ${({ theme }) => theme.colors.icon_blue};
	cursor: pointer;
`

export const UnfollowIcon = styled(Unfollow)`
	fill: #ea7070;
	cursor: pointer;
`
