import { SlArrowRight } from 'react-icons/sl'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'

import { Container, ContentWrapper, ProfileData, ProfileImg, Subtitle } from './styled.ts'

export const ProfileCard = () => {
	const { data } = useAuthMeQuery()

	return (
		<Container>
			<ContentWrapper>
				<ProfileImg src={baseProfilePhoto} alt="small-profile-photo" />
				<ProfileData>
					<p>{data?.data.login}</p>
					<Subtitle>{data?.data.email}</Subtitle>
				</ProfileData>
				<SlArrowRight style={{ height: '12px' }} />
			</ContentWrapper>
		</Container>
	)
}
