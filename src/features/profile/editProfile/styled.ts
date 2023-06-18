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

export const Form = styled.form`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 35px;
`

export const FlexItem = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`

export const FlexText = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`

export const TitleField = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.l};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
`

export const Description = styled.p`
	width: 75%;
	font-size: ${({ theme }) => theme.sizes.font.xs};
	font-weight: ${({ theme }) => theme.sizes.weight.regular};
	color: ${({ theme }) => theme.colors.font.secondary_light};
`

export const Line = styled.hr`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.font.secondary_hard};
`
