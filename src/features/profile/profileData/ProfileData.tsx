import { memo } from 'react'

import { AboutBlock } from 'src/features/profile/profileData/aboutBlock/AboutBlock.tsx'
import { ContactBlock } from 'src/features/profile/profileData/contactBlock/ContactBlock.tsx'

type PropsType = {
	userId: number
}

export const ProfileData = memo(({ userId }: PropsType) => {
	return (
		<>
			<AboutBlock userId={userId} />
			<ContactBlock userId={userId} />
		</>
	)
})
