import { ReactComponent as LogoDark } from 'src/assets/icon/full-logo-dark.svg'
import { ReactComponent as LogoLight } from 'src/assets/icon/full-logo-light.svg'

import { useAppSelector } from 'src/common/hooks/useAppSelector.ts'

import { ProfileLinkMenu } from 'src/features/profile/profileLinkMenu/ProfileLinkMenu.tsx'

import { Container, ContentWrapper } from './styled.ts'

export const Header = () => {
	const theme = useAppSelector((state) => state.app.theme)
	const ownerId = useAppSelector((state) => state.auth.authData.id)

	return (
		<Container>
			<ContentWrapper>
				<div>{theme === 'light' ? <LogoDark /> : <LogoLight />}</div>
				{ownerId && <ProfileLinkMenu userId={ownerId} />}
			</ContentWrapper>
		</Container>
	)
}
