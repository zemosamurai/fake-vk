import { Button } from 'src/common/components'
import { InputTypeFile } from 'src/common/components/InputTypeFile/InputTypeFile.tsx'

import { Text, TextBottom, Wrapper } from 'src/features/profile/editProfile/avatarAndStatus/selectPhoto/styled.ts'

type PropsType = {
	onSelectPhoto: (img: File) => void
}

export const SelectPhoto = ({ onSelectPhoto }: PropsType) => {
	return (
		<>
			<Wrapper>
				<Text>
					It will be easier for friends to recognize you if you upload your real photo.
					<br />
					You can upload an image in JPG, JPEG or PNG format.
				</Text>
				<InputTypeFile onSelectedImage={onSelectPhoto}>
					<Button variant={'primary'}>Select file</Button>
				</InputTypeFile>
			</Wrapper>

			<TextBottom>If you're having trouble uploading, try choosing a smaller photo size.</TextBottom>
		</>
	)
}
