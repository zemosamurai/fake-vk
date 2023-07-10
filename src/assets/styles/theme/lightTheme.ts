import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
	colors: {
		btn: {
			primary_bg: '#447bba',
			primary_color: '#ffffff',
			secondary_bg: '#e5ebf1',
			secondary_color: '#346297',
			outlined_bg: '#ffffff',
		},
		bg: {
			primary: '#EDEEF0',
			secondary: '#FFFFFF',

			account_menu: '#F0F2F5',
			account_menu_hover: '#F7F8FA',
			sidebar_hover: '#e7e8ec',

			btn_primary: '#5181B8',
			btn_secondary: '#E3E9EF',

			border_header: '#e7e8ec',
			border_primary: '#dce1e6',
			box_shadow: '0 0 0 1px #dce1e6',

			blue: '#0077ff',
		},
		font: {
			primary: '#000000',
			secondary_light: '#939393',
			secondary_medium: '#626D7A',
			secondary_hard: '#656565',

			friend_name: '#2a5885',
			friend_status: '#626d7a',

			linkC: '#2A5885',
		},
		messages: {
			send_btn: '#818c99',
			send_btn_hover: '#737b80',
			bg: '#EDEEF0',
			border: '#d3d9de',
		},
		icon_blue: '#447BBA',
		loaderColor: '#447BBA',
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
