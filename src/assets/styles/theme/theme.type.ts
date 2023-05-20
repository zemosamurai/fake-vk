export type ThemeType = {
	colors: ColorsType
	sizes: SizesType
}

export type SizesType = {
	layout: string
	sidebar: string
	body: string
	font: {
		xs: string
		s: string
		m: string
		l: string
		xl: string
	}
	weight: {
		regular: string
		medium: string
		bold: string
		black: string
	}
}

export type ColorsType = {
	white: string
	black: string
	primary: string
	secondary: string
	success: string
	danger: string

	bg: {
		primary: string
		secondary: string

		account_menu: string
		account_menu_hover: string

		btn_primary: string
		btn_secondary: string

		blue: string
	}
	font: {
		primary: string
		secondary_light: string
		secondary_medium: string
		secondary_hard: string
		linkC: string
	}

	icon_blue: string
}
