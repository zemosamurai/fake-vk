import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'src/assets/styles/globalStyle.ts'
import { darkTheme, lightTheme } from 'src/assets/styles/theme/theme.ts'

import { useAppSelector } from 'src/common/hooks/useAppSelector.ts'

import { Pages } from 'src/pages/Pages.tsx'

export const App = () => {
	const theme = useAppSelector((state) => state.app.theme)
	const currentTheme = theme === 'light' ? lightTheme : darkTheme

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<Pages />
		</ThemeProvider>
	)
}
