import styled from 'styled-components'

export const InfoPanel = styled.div`
	margin-bottom: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ButtonGroup = styled.div`
	display: flex;
	column-gap: 20px;
`

export const Count = styled.p`
	min-height: 32px;
	margin-left: 5px;
	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.colors.font.friend_name};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	font-size: ${({ theme }) => theme.sizes.font.m};
`

export const FriendsContainer = styled.div`
	margin-top: 15px;
`
