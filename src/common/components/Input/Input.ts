import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	height: 36px;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.16);
	border-radius: 8px;
	background-color: #f0f2f5;
	font-size: ${({ theme }) => theme.sizes.font.m};
`
