import styled from 'styled-components'

export const Title = styled.p`
	font-size: 18px;
	margin-bottom: 30px;
`

export const FlexItems = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`

export const FlexItem = styled.div`
	display: flex;
`

export const TitleItem = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.l};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	width: 50%;
`

export const DescriptionItem = styled.p`
	width: 50%;
	line-height: 20px;
	word-break: break-word;
`
