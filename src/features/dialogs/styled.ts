import styled from 'styled-components'

import { scrollStyles } from 'src/assets/styles/scrollStyles.ts'

import { Container } from 'src/common/components'

export const DialogsContainer = styled(Container)`
	height: calc(100vh - 90px);
	padding: 0;
	overflow-y: auto;

	${scrollStyles}
`
