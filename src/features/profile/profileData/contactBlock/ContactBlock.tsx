import { memo } from 'react'

import { Container } from 'src/common/components'

import { DescriptionItem, FlexItem, FlexItems, Title, TitleItem } from 'src/features/profile/profileData/styled.ts'

import { useGetProfileQuery } from 'src/services/samuraiAPI/profileAPI.ts'

type PropsType = {
	userId: number
}

export const ContactBlock = memo(({ userId }: PropsType) => {
	const { data } = useGetProfileQuery(userId)

	const dataAboutMe = [
		{ id: 1, title: 'facebook', description: data?.contacts.facebook || 'data is not filled' },
		{ id: 2, title: 'github', description: data?.contacts.github || 'data is not filled' },
		{ id: 3, title: 'instagram', description: data?.contacts.instagram || 'data is not filled' },
		{ id: 4, title: 'main link', description: data?.contacts.mainLink || 'data is not filled' },
		{ id: 5, title: 'twitter', description: data?.contacts.twitter || 'data is not filled' },
		{ id: 6, title: 'vk', description: data?.contacts.vk || 'data is not filled' },
		{ id: 7, title: 'website', description: data?.contacts.website || 'data is not filled' },
		{ id: 8, title: 'youtube', description: data?.contacts.youtube || 'data is not filled' },
	]

	return (
		<Container>
			<Title>Contacts</Title>
			<FlexItems>
				{dataAboutMe.map(({ id, description, title }) => (
					<FlexItem key={id}>
						<TitleItem>{title}</TitleItem>
						<DescriptionItem>{description}</DescriptionItem>
					</FlexItem>
				))}
			</FlexItems>
		</Container>
	)
})
