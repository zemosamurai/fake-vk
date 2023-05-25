export type ThemeType = {
	colors: ColorsType
	sizes: SizesType
}

export type SizesType = {
	layout: string
	sidebar: string
	body: string
	font: SizesFontType
	weight: SizesFontWeightType
}
export type SizesFontType = {
	xs: string
	s: string
	m: string
	l: string
	xl: string
}
export type SizesFontWeightType = {
	regular: string
	medium: string
	bold: string
	black: string
}

export type ColorsType = {
	btn: ColorsBtnType
	bg: ColorsBgType
	font: ColorsFontType
	icon_blue: string
}
type ColorsBtnType = {
	primary_bg: string
	primary_color: string
	secondary_bg: string
	secondary_color: string
	outlined_bg: string
}
type ColorsBgType = {
	primary: string
	secondary: string

	account_menu: string
	account_menu_hover: string
	sidebar_hover: string

	btn_primary: string
	btn_secondary: string

	border_header: string
	border_primary: string
	box_shadow: string

	blue: string
}
type ColorsFontType = {
	primary: string
	secondary_light: string
	secondary_medium: string
	secondary_hard: string
	linkC: string

	friend_name: string
	friend_status: string
}
