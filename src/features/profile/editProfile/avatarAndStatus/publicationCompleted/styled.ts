import styled from 'styled-components'

import { ReactComponent as Icon } from 'src/assets/icon/success.svg'

export const Wrapper = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 30px;
`

export const Text = styled.p`
	font-size: ${({ theme }) => theme.sizes.font.xl};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	line-height: 24px;
`

export const SuccessIcon = styled(Icon)`
	width: 150px;
`
