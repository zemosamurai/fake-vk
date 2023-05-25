import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { ReactComponent as Friend } from 'src/assets/icon/friend.svg'
import { ReactComponent as Home } from 'src/assets/icon/home.svg'
import { ReactComponent as Message } from 'src/assets/icon/message.svg'
import { ReactComponent as Music } from 'src/assets/icon/music.svg'
import { ReactComponent as News } from 'src/assets/icon/news.svg'

export const Container = styled.div`
	width: ${({ theme }) => theme.sizes.sidebar};
	display: flex;
	flex-direction: column;
	row-gap: 4px;
`

export const LinkEl = styled(Link)`
	padding: 4px 6px;
	display: flex;
	align-items: center;

	font-size: ${({ theme }) => theme.sizes.font.m};
	font-weight: ${({ theme }) => theme.sizes.weight.regular};
	color: ${({ theme }) => theme.colors.font.primary};
	border-radius: 4px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.bg.sidebar_hover};
	}
`

const iconStyle = css`
	margin-right: 10px;
	fill: ${({ theme }) => theme.colors.icon_blue};
`

export const FriendIcon = styled(Friend)`
	${iconStyle}
`
export const HomeIcon = styled(Home)`
	${iconStyle}
`
export const MessageIcon = styled(Message)`
	${iconStyle}
`
export const MusicIcon = styled(Music)`
	${iconStyle}
`
export const NewsIcon = styled(News)`
	${iconStyle}
`
