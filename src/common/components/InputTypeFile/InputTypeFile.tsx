import { ChangeEvent, ReactNode, useRef } from 'react'

type PropsType = {
	children: ReactNode
	onSelectedImage: (image: File) => void
}

export const InputTypeFile = ({ children, onSelectedImage }: PropsType) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const selectFileHandler = () => {
		inputRef && inputRef.current?.click()
	}

	const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			const file = e.target.files[0]

			onSelectedImage(file)
		}
	}

	return (
		<div onClick={selectFileHandler}>
			{children}
			<input
				type="file"
				ref={inputRef}
				style={{ display: 'none' }}
				onChange={uploadHandler}
				accept="image/png, image/jpeg, image/jpg"
			/>
		</div>
	)
}
