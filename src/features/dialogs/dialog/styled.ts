import styled from 'styled-components'

export const Container = styled.div`
	cursor: pointer;
	width: 100%;
	display: flex;
	column-gap: 13px;
	align-items: flex-start;
	padding: 15px 20px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.bg.account_menu};
	}

	&:not(&:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.bg.border_primary};
	}
`

export const DataContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	row-gap: 8px;
`

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`

export const FlexWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	row-gap: 8px;
`

export const Title = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.l};
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
`

export const Description = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xs};
	color: ${({ theme }) => theme.colors.font.friend_status};
`

export const DescriptionActive = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xs};
	color: ${({ theme }) => theme.colors.icon_blue};
`
