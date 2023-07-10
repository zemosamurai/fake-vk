import styled from 'styled-components'

import { Container } from 'src/common/components'

export const Wrapper = styled(Container)`
	padding-bottom: 0;
	height: calc(100vh - 154px);
	position: relative;
	box-shadow: none;
	display: flex;
	flex-direction: column;
	row-gap: 25px;
	overflow-y: auto;
	margin: 0;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		margin: 15px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.messages.send_btn};
		border-radius: 10px;
	}
`

export const AnchorDiv = styled.div``
