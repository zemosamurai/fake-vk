import styled from 'styled-components'

import { FlexItem } from 'src/features/profile/editProfile/styled.ts'

export const FlexWrap = styled(FlexItem)`
	margin-bottom: 30px;
`

export const Error = styled.p`
	position: absolute;
	right: 0;
	top: 45px;
	font-size: ${({ theme }) => theme.sizes.font.xs};

	color: #ea4646;
`
