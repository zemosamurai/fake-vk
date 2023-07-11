import { Container, EmptyMessagesIcon, Text, Wrapper } from 'src/common/components/EmptyList/styled.ts'

export const EmptyList = () => {
	return (
		<Container>
			<Wrapper>
				<EmptyMessagesIcon />
				<Text>message list is empty...</Text>
			</Wrapper>
		</Container>
	)
}
