import { memo } from 'react'

import { Container } from 'src/common/components'

import { DescriptionItem, FlexItem, FlexItems, Title, TitleItem } from 'src/features/profile/profileData/styled.ts'

import { useGetProfileQuery } from 'src/services/samuraiAPI/profileAPI.ts'

type PropsType = {
	userId: number
}

export const AboutBlock = memo(({ userId }: PropsType) => {
	const { data } = useGetProfileQuery(userId)

	const dataAboutMe = [
		{ id: 1, title: 'about me', description: data?.aboutMe || 'data is not filled' },
		{ id: 2, title: 'looking for a job', description: data?.lookingForAJob ? 'yes' : 'no' },
		{ id: 3, title: 'job description', description: data?.lookingForAJobDescription || 'data is not filled' },
	]

	return (
		<Container>
			<Title>About</Title>
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
