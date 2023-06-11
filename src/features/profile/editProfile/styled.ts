import styled from 'styled-components'

export const Title = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xl};
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
	margin-bottom: 40px;
`

export const ContentContainer = styled.div`
	display: flex;
	align-items: flex-start;
`
