import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-top: 10px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 30px;
`

export const Text = styled.p`
	text-align: center;
	line-height: 24px;
`

export const TextBottom = styled(Text)`
	padding-top: 20px;
	border-top: 1px solid ${({ theme }) => theme.colors.bg.border_primary};
`
