import styled from 'styled-components'

import { scrollStyles } from 'src/assets/styles/scrollStyles.ts'

import { Container } from 'src/common/components'

export const DialogPageContainer = styled(Container)`
	padding: 0;
	height: calc(100vh - 90px);
`

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

	${scrollStyles}
`
