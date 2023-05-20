import { DefaultTheme } from 'styled-components'

export const baseTheme: DefaultTheme = {
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		primary: '#7986cb',
		secondary: '#2b2b2b',
		success: '#4caf50',
		danger: '#f44336',

		bg: {
			primary: '#EDEEF0',
			secondary: '#FFFFFF',

			account_menu: '#F0F2F5',
			account_menu_hover: '#F7F8FA',

			btn_primary: '#5181B8',
			btn_secondary: '#E3E9EF',

			blue: '#0077ff',
		},

		font: {
			primary: '#000000',
			secondary_light: '#939393',
			secondary_medium: '#626D7A',
			secondary_hard: '#656565',
			linkC: '#2A5885',
		},

		icon_blue: '#447BBA',
	},

	sizes: {
		layout: '1106px',
		sidebar: '149px',
		body: '911px',

		font: {
			xs: '12px',
			s: '12.5px',
			m: '13px',
			l: '14px',
			xl: '19px',
		},

		weight: {
			regular: '400',
			medium: '500',
			bold: '700',
			black: '900',
		},
	},
}

export const lightTheme: DefaultTheme = {
	...baseTheme,

	colors: {
		...baseTheme.colors,
	},
}

export const darkTheme: DefaultTheme = {
	...baseTheme,

	colors: {
		...baseTheme.colors,
		bg: {
			...baseTheme.colors.bg,
			primary: '#141414',
			secondary: '#222222',
			account_menu: '#333333',
			account_menu_hover: '#555555',
		},

		font: {
			...baseTheme.colors.font,
			primary: '#E1E3E6',
		},
	},
}
