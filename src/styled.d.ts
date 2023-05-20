import 'styled-components'

import { ThemeType } from 'src/assets/styles/theme/theme.type.ts'

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
