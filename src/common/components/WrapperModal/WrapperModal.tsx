import { MouseEvent, ReactNode, useEffect } from 'react'

import {
	CloseButton,
	CloseIcon,
	ModalBody,
	ModalContainer,
	ModalHeader,
	ModalTitle,
	Overlay,
} from 'src/common/components/WrapperModal/styled.ts'

type PropsType = {
	children: ReactNode
	title: string
	closeModal: () => void
}

export const WrapperModal = ({ children, closeModal, title }: PropsType) => {
	useEffect(() => {
		document.addEventListener('keydown', handlerKeyPress)

		return () => {
			document.removeEventListener('keydown', handlerKeyPress)
		}
	}, [])

	const handlerKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Escape') closeModal()
	}
	const handlerClickModalContainer = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

	return (
		<Overlay onClick={closeModal}>
			<ModalContainer onClick={handlerClickModalContainer}>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<CloseButton onClick={closeModal}>
						<CloseIcon />
					</CloseButton>
				</ModalHeader>

				<ModalBody>{children}</ModalBody>
			</ModalContainer>
		</Overlay>
	)
}
