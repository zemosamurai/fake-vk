import { Container } from 'src/common/components'

import { Dialog } from 'src/features/dialogs/dialog/Dialog.tsx'

export const Dialogs = () => {
	const data = [
		{
			message: 'hello World',
			photo: 'https://placehold.co/150',
			userId: 1,
			userName: 'Dimych',
		},
		{
			message: 'hello World',
			photo: 'https://placehold.co/150',
			userId: 2,
			userName: 'Dimych',
		},
		{
			message: 'hello World',
			photo: 'https://placehold.co/150',
			userId: 3,
			userName: 'Dimych',
		},
		{
			message: 'hello World',
			photo: 'https://placehold.co/150',
			userId: 4,
			userName: 'Dimych',
		},
	]

	return (
		<Container>
			{data.map((el) => (
				<Dialog key={el.userId} />
			))}
		</Container>
	)
}
