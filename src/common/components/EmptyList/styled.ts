import styled from 'styled-components'

import { ReactComponent as EmptyMessages } from 'src/assets/image/empty-messages.svg'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 30px;
`

export const EmptyMessagesIcon = styled(EmptyMessages)`
	width: 150px;
	fill: ${({ theme }) => theme.colors.font.primary};
`

export const Text = styled.p`
	font-size: 25px;
	letter-spacing: 0.2px;
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
`
