import { ReactComponent as LogoDark } from 'src/assets/icon/full-logo-dark.svg'
import { ReactComponent as LogoLight } from 'src/assets/icon/full-logo-light.svg'

import { useAppSelector } from 'src/common/hooks/useAppSelector.ts'

import { ProfileLinkMenu } from 'src/features/profile/profileLinkMenu/ProfileLinkMenu.tsx'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'
import { AuthEnum } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

import { Container, ContentWrapper } from './styled.ts'

export const Header = () => {
	const theme = useAppSelector((state) => state.app.theme)
	const { data } = useAuthMeQuery()

	return (
		<Container>
			<ContentWrapper>
				<div>{theme === 'light' ? <LogoDark /> : <LogoLight />}</div>
				{data?.resultCode === AuthEnum.Authorized && <ProfileLinkMenu />}
			</ContentWrapper>
		</Container>
	)
}
