import styled from 'styled-components'

import { ReactComponent as Search } from 'src/assets/icon/search.svg'

export const Wrapper = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.sizes.font.m};
	box-shadow: ${({ theme }) => theme.colors.bg.box_shadow};
	border-radius: 6px;
`

export const Input = styled.input`
	width: 100%;
	padding: 8px 12px 8px 12px;
	color: ${({ theme }) => theme.colors.font.primary};
`

export const Button = styled.button`
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #e5ebf1;
	border-radius: 0 6px 6px 0;
	border-left: 1px solid #dce1e6;
`

export const SearchIcon = styled(Search)``
