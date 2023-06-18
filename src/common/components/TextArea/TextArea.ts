import styled from 'styled-components'

export const TextArea = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 8px 12px;
	border-radius: 8px;
	font-size: ${({ theme }) => theme.sizes.font.m};
	color: ${({ theme }) => theme.colors.font.primary};
	border: 1px solid ${({ theme }) => theme.colors.font.primary};
	resize: none;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.font.primary};
	}
`
