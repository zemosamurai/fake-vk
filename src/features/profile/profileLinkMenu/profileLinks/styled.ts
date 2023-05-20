import styled, { css } from 'styled-components'

import { ReactComponent as Exit } from 'src/assets/icon/exit.svg'
import { ReactComponent as Help } from 'src/assets/icon/help.svg'
import { ReactComponent as Setting } from 'src/assets/icon/setting.svg'
import { ReactComponent as Theme } from 'src/assets/icon/theme.svg'

export const ItemButton = styled.button`
	width: 100%;
	padding: 0 16px;
	height: 36px;
	display: flex;
	align-items: center;
	column-gap: 7px;

	font-size: ${({ theme }) => theme.sizes.font.m};

	&:hover {
		background-color: ${({ theme }) => theme.colors.bg.account_menu_hover};
	}

	&:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.colors.bg.account_menu_hover};
	}
`

const iconStyled = css`
	fill: ${({ theme }) => theme.colors.icon_blue};
`

export const ExitIcon = styled(Exit)`
	${iconStyled}
`
export const SettingIcon = styled(Setting)`
	${iconStyled}
`
export const HelpIcon = styled(Help)`
	${iconStyled}
`
export const ThemeIcon = styled(Theme)`
	${iconStyled}
`
