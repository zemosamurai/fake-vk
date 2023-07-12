import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	column-gap: 10px;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 7px;
`

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 8px;
`

export const Title = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.m};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	color: ${({ theme }) => theme.colors.icon_blue};
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`

export const Description = styled.p`
	width: 400px;
	word-break: break-word;
	font-size: ${({ theme }) => theme.sizes.font.s};
`

export const DescriptionTime = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xs};
	color: ${({ theme }) => theme.colors.font.friend_status};
`
