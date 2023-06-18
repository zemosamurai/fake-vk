import styled, { css } from 'styled-components'

type VariantType = 'outlined' | 'standard'

const variants = {
	['outlined']: css`
		border: 1px solid ${({ theme }) => theme.colors.font.primary};
		color: ${({ theme }) => theme.colors.font.primary};
	`,
	['standard']: css`
		border: 1px solid rgba(0, 0, 0, 0.16);
		background-color: ${({ theme }) => theme.colors.bg.btn_secondary};
	`,
}

export const Input = styled.input<{ variant?: VariantType }>`
	${(p) => variants[p.variant || 'standard']}
	width: 100%;
	height: 36px;
	padding: 8px 12px;
	border-radius: 8px;
	font-size: ${({ theme }) => theme.sizes.font.m};

	&:-webkit-autofill {
		-webkit-box-shadow: none !important;
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.font.primary};
	}
`
