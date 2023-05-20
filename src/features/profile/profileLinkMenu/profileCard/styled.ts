import styled from 'styled-components'

export const Container = styled.div`
	width: 276px;
	padding: 0 16px 6px;
`

export const ContentWrapper = styled.div`
	width: 100%;
	padding: 12px 16px;
	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.bg.account_menu};
	border-radius: 8px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.bg.account_menu_hover};
	}
`

export const ProfileImg = styled.img`
	margin-right: 12px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
`

export const ProfileData = styled.div`
	margin-right: 8px;

	display: flex;
	flex-direction: column;
	flex-grow: 1;
	row-gap: 4px;
`

export const Subtitle = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xs};
	color: #9eb4c8;
`
