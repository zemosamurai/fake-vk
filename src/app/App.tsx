import { useLayoutEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'

import { ThemeType, setTheme } from 'src/app/appSlice.ts'

import { GlobalStyle } from 'src/assets/styles/globalStyle.ts'
import { darkTheme } from 'src/assets/styles/theme/darkTheme.ts'
import { lightTheme } from 'src/assets/styles/theme/lightTheme.ts'

import { useAppDispatch } from 'src/common/hooks'
import { useAppSelector } from 'src/common/hooks/useAppSelector.ts'
import { getFromLocalStorage } from 'src/common/utils/getLocalStorage.ts'

import { Pages } from 'src/pages/Pages.tsx'

export const App = () => {
	const theme = useAppSelector((state) => state.app.theme)
	const dispatch = useAppDispatch()
	const currentTheme = theme === 'light' ? lightTheme : darkTheme

	useLayoutEffect(() => {
		const currentTheme = getFromLocalStorage('theme') as ThemeType
		dispatch(setTheme(currentTheme))
	}, [])

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<Pages />
			<ToastContainer theme={theme} position={'bottom-left'} />
		</ThemeProvider>
	)
}
