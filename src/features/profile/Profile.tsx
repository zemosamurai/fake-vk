import { useParams } from 'react-router-dom'

import { ProfileData } from 'src/features/profile/profileData/ProfileData.tsx'
import { ProfileHeader } from 'src/features/profile/profileHeader/ProfileHeader.tsx'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'

export const Profile = () => {
	const { userId } = useParams()
	const { data } = useAuthMeQuery()
	const isOwner = userId === 'owner'
	const ownerId = data?.data.id as number
	const currentId = isOwner ? ownerId : Number(userId)

	if (!currentId) return null

	return (
		<>
			<ProfileHeader userId={currentId} isOwner={isOwner} />
			<ProfileData userId={currentId} />
		</>
	)
}
