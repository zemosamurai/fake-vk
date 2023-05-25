import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 15px 0;
	display: flex;
	column-gap: 15px;

	&:not(:first-child) {
		border-top: 1px solid ${({ theme }) => theme.colors.bg.border_primary};
	}
`

export const UserImg = styled.img`
	width: 80px;
	min-width: 80px;
	height: 80px;
	min-height: 80px;

	border-radius: 50%;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18);
`

export const UserInfo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.p`
	margin-top: 5px;
	margin-bottom: 9px;
	color: ${({ theme }) => theme.colors.font.friend_name};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
`
