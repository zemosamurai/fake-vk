import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { setTheme } from 'src/app/appSlice.ts'

import { GlobalStyle } from 'src/assets/styles/globalStyle.ts'
import { darkTheme } from 'src/assets/styles/theme/darkTheme.ts'
import { lightTheme } from 'src/assets/styles/theme/lightTheme.ts'

import { useAppDispatch } from 'src/common/hooks'
import { useAppSelector } from 'src/common/hooks/useAppSelector.ts'
import { loadTheme } from 'src/common/utils/localStorageTheme.ts'

import { Pages } from 'src/pages/Pages.tsx'

export const App = () => {
	const theme = useAppSelector((state) => state.app.theme)
	const dispatch = useAppDispatch()
	const currentTheme = theme === 'light' ? lightTheme : darkTheme

	useLayoutEffect(() => {
		dispatch(setTheme(loadTheme()))
	}, [])

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<Pages />
		</ThemeProvider>
	)
}
