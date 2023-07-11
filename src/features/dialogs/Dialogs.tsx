import { EmptyList, LoaderFullWidth } from 'src/common/components'

import { Dialog } from 'src/features/dialogs/dialog/Dialog.tsx'
import { DialogsContainer } from 'src/features/dialogs/styled.ts'

import { useGetDialogsQuery } from 'src/services/samuraiAPI/dialogsAPI.ts'

export const Dialogs = () => {
	const { data, isFetching } = useGetDialogsQuery()

	if (isFetching) return <LoaderFullWidth />

	return (
		<DialogsContainer>
			{data?.length ? data?.map((el) => <Dialog key={el.id} dialogData={el} />) : <EmptyList />}
		</DialogsContainer>
	)
}
