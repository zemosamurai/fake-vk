import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	width: ${({ theme }) => theme.sizes.sidebar};
	display: flex;
	flex-direction: column;
	row-gap: 4px;
`

export const LinkEl = styled(Link)`
	padding: 4px 6px;
	display: flex;
	align-items: center;

	font-size: ${({ theme }) => theme.sizes.font.m};
	font-weight: ${({ theme }) => theme.sizes.weight.regular};
	color: ${({ theme }) => theme.colors.font.primary};
	border-radius: 4px;

	&:hover {
		background-color: #e7e8ec;
	}
`

export const IconWrapper = styled.div`
	margin-right: 10px;
`
