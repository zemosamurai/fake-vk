import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { WrapperModal } from 'src/common/components/WrapperModal/WrapperModal.tsx'

type PropsType = {
	show: boolean
	title: string
	closeModal: () => void
	children: ReactNode
}

export const Portal = ({ show, closeModal, children, title }: PropsType) => {
	if (!show) return null

	return createPortal(
		<WrapperModal title={title} closeModal={closeModal}>
			{children}
		</WrapperModal>,
		document.body
	)
}
