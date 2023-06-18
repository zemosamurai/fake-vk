import {
	SuccessIcon,
	Text,
	Wrapper,
} from 'src/features/profile/editProfile/avatarAndStatus/publicationCompleted/styled.ts'

export const PublicationCompleted = () => {
	return (
		<Wrapper>
			<SuccessIcon />
			<Text>Your profile picture is set</Text>
		</Wrapper>
	)
}
