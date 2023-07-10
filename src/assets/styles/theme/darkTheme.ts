import { DefaultTheme } from 'styled-components'

import { lightTheme } from 'src/assets/styles/theme/lightTheme.ts'

export const darkTheme: DefaultTheme = {
	...lightTheme,

	colors: {
		...lightTheme.colors,
		btn: {
			...lightTheme.colors.btn,
			primary_bg: '#e1e3e6',
			primary_color: '#222222',
			secondary_bg: '#424242',
			secondary_color: '#e1e3e6',
		},
		bg: {
			...lightTheme.colors.bg,
			primary: '#141414',
			secondary: '#222222',

			account_menu: '#333333',
			account_menu_hover: '#555555',
			sidebar_hover: '#333333',

			border_header: '#292929',
			border_primary: '#424242',
			box_shadow: '0 0 0 1px #424242',
		},

		font: {
			...lightTheme.colors.font,
			primary: '#E1E3E6',

			friend_name: '#ffffff',
			friend_status: '#939393',
		},

		messages: {
			...lightTheme.colors.messages,
			send_btn: '#b2b2b2',
			send_btn_hover: '#d2d2d2',
			bg: '#292929',
			border: '#555555',
		},
		icon_blue: '#71AAEB',
		loaderColor: '#FFFFFF',
	},
}
