import styled from 'styled-components'

export const ProfileInfo = styled.div`
	display: flex;
	align-items: center;
`

export const ProfileImg = styled.img`
	width: 150px;
	height: 150px;

	border: 4px solid ${({ theme }) => theme.colors.bg.secondary};
	margin-right: 20px;
	border-radius: 50%;
`

export const ProfileWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.h1`
	margin-bottom: 5px;
	font-size: 21px;
	color: ${({ theme }) => theme.colors.font.primary};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
`

export const Subtitle = styled.p`
	color: ${({ theme }) => theme.colors.font.secondary_light};
`
