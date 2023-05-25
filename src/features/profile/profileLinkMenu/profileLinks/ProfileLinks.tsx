import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { setTheme } from 'src/app/appSlice.ts'

import { Toggle } from 'src/common/components/Toggle/Toggle.tsx'
import { useAppDispatch, useAppSelector } from 'src/common/hooks'
import { stopPropagation } from 'src/common/utils'

import { useLogOutMutation } from 'src/services/samuraiAPI/authAPI.ts'
import { LogOutEnum } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

import { ExitIcon, HelpIcon, Item, ItemThemeContent, SettingIcon, ThemeIcon, Title } from './styled.ts'

export const ProfileLinks = () => {
	const themeMode = useAppSelector((state) => state.app.theme)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [logOut] = useLogOutMutation()

	const handlerSignOut = () => {
		logOut()
			.unwrap()
			.then((res) => {
				if (res.resultCode === LogOutEnum.LogOut) {
					navigate('/login')
				}
			})
	}

	const handlerChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.checked

		dispatch(setTheme(value ? 'dark' : 'light'))
	}

	return (
		<>
			<Item>
				<SettingIcon />
				<Title>Setting</Title>
			</Item>

			<Item onClick={stopPropagation}>
				<ItemThemeContent>
					<ThemeIcon />
					<Title>Theme</Title>
				</ItemThemeContent>
				<Toggle checked={themeMode === 'dark'} onChange={handlerChangeToggle} />
			</Item>

			<Item>
				<HelpIcon />
				<Title>Help</Title>
			</Item>

			<Item onClick={handlerSignOut}>
				<ExitIcon />
				<Title>Sign out</Title>
			</Item>
		</>
	)
}
