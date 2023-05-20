import { ProfileData } from 'src/features/profile/profileData/ProfileData.tsx'
import { ProfileHeader } from 'src/features/profile/profileHeader/ProfileHeader.tsx'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'

export const Profile = () => {
	const { data } = useAuthMeQuery()

	if (!data?.data.id) return null

	return (
		<>
			<ProfileHeader userId={data.data.id} />
			<ProfileData />
		</>
	)
}
