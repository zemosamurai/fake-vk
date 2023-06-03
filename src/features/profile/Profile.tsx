import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoaderFullWidth } from 'src/common/components'
import { useAppSelector } from 'src/common/hooks'

import { ProfileData } from 'src/features/profile/profileData/ProfileData.tsx'
import { ProfileHeader } from 'src/features/profile/profileHeader/ProfileHeader.tsx'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

export const Profile = () => {
	const { userId } = useParams()
	const ownerId = useAppSelector((state) => state.auth.authData.id)
	const currentId = userId === 'owner' ? ownerId : Number(userId)

	const { isLoading: isLoadingStatus, error: errorStatus } = useGetStatusQuery(currentId, { skip: !currentId })
	const { isLoading: isLoadingProfile, error: errorProfile } = useGetProfileQuery(currentId, { skip: !currentId })

	if (isLoadingProfile || isLoadingStatus) return <LoaderFullWidth />
	if (errorStatus || errorProfile) {
		toast.error('unexpected error')
	}

	if (!currentId) return null

	return (
		<>
			<ProfileHeader userId={currentId} isOwner={userId === 'owner'} />
			<ProfileData userId={currentId} />
		</>
	)
}
