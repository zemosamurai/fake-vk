import styled, { css } from 'styled-components'

const variants = {
	['primary']: css`
		color: ${({ theme }) => theme.colors.btn.primary_color};
		background-color: ${({ theme }) => theme.colors.btn.primary_bg};
	`,
	['secondary']: css`
		color: ${({ theme }) => theme.colors.btn.secondary_color};
		background-color: ${({ theme }) => theme.colors.btn.secondary_bg};
	`,
	['outlined']: css`
		color: ${({ theme }) => theme.colors.btn.secondary_color};
		background: none;
		box-shadow: 0 0 0 1px #dce1e6;
	`,
}

type PropsType = {
	variant?: 'primary' | 'secondary' | 'outlined'
}

export const Button = styled.button<PropsType>`
	${(p) => variants[p.variant || 'secondary']}
	min-height: 32px;
	padding: 0 16px;
	height: 32px;

	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	font-size: ${({ theme }) => theme.sizes.font.m};
	border-radius: 6px;

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}

	&:hover {
		opacity: 0.8;
	}
`
