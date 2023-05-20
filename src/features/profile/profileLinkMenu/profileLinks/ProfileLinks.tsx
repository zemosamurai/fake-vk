import { useNavigate } from 'react-router-dom'

import { useLogOutMutation } from 'src/services/samuraiAPI/authAPI.ts'
import { LogOutEnum } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

import { ExitIcon, HelpIcon, ItemButton, SettingIcon, ThemeIcon } from './styled.ts'

export const ProfileLinks = () => {
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

	return (
		<>
			<ItemButton>
				<SettingIcon />
				<span>Setting</span>
			</ItemButton>

			<ItemButton>
				<ThemeIcon />
				<span>Theme</span>
			</ItemButton>

			<ItemButton>
				<HelpIcon />
				<span>Help</span>
			</ItemButton>

			<ItemButton onClick={handlerSignOut}>
				<ExitIcon />
				<span>Sign out</span>
			</ItemButton>
		</>
	)
}
