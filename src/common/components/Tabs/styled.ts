import styled, { css } from 'styled-components'

const buttonType = {
	['active']: css`
		color: ${({ theme }) => theme.colors.font.primary};
		border-left: 3px solid ${({ theme }) => theme.colors.font.primary};
		font-weight: ${({ theme }) => theme.sizes.weight.medium};
	`,

	['default']: css`
		color: ${({ theme }) => theme.colors.font.secondary_light};
	`,
}

export const ButtonTab = styled.button<{ variant: 'active' | 'default' }>`
	${(p) => buttonType[p.variant]};
	padding-left: 10px;
	font-size: ${({ theme }) => theme.sizes.font.l};
	width: 140px;
	display: flex;
	align-items: flex-start;
`

export const Content = styled.div<{ variant: 'block' | 'none' }>`
	display: ${(p) => p.variant};
	width: 100%;
`
