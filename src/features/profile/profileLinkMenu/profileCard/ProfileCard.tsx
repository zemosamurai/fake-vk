import { SlArrowRight } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { PATH } from 'src/pages/path.ts'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'
import { useGetProfileQuery } from 'src/services/samuraiAPI/profileAPI.ts'

import { Container, ContentWrapper, ProfileData, ProfileImg, Subtitle } from './styled.ts'

export const ProfileCard = () => {
	const navigate = useNavigate()
	const { data } = useAuthMeQuery()
	const { data: profileData } = useGetProfileQuery(data!.data.id)

	const handlerNavigateToProfile = () => navigate(`${PATH.PROFILE}/owner`)

	return (
		<Container onClick={handlerNavigateToProfile}>
			<ContentWrapper>
				<ProfileImg src={profileData?.photos.small || baseProfilePhoto} alt="small-profile-photo" />
				<ProfileData>
					<p>{data?.data.login}</p>
					<Subtitle>{data?.data.email}</Subtitle>
				</ProfileData>
				<SlArrowRight style={{ height: '12px' }} />
			</ContentWrapper>
		</Container>
	)
}
