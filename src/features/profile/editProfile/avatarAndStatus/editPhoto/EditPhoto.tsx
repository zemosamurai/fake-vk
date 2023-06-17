import { useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'

import { Button } from 'src/common/components'
import { dataURLtoFile } from 'src/common/utils'

import { STEP } from 'src/features/profile/editProfile/avatarAndStatus/AvatarAndStatus.tsx'
import { ButtonGroup, Text, Wrapper } from 'src/features/profile/editProfile/avatarAndStatus/editPhoto/styled.ts'

import { useSavePhotoMutation } from 'src/services/samuraiAPI/profileAPI.ts'

type PropsType = {
	imgUrl: string | null
	setStep: (step: number) => void
}

export const EditPhoto = ({ imgUrl, setStep }: PropsType) => {
	const [savePhoto] = useSavePhotoMutation()
	const editorRef = useRef<AvatarEditor>(null)

	const handlerPublishPost = () => {
		if (editorRef.current) {
			const canvas = editorRef.current.getImageScaledToCanvas()
			const file = dataURLtoFile(canvas.toDataURL(), 'avatar.jpg')

			const formData = new FormData()

			formData.append('image', file)

			savePhoto(formData)
		}
	}
	const handlerBackStep = () => setStep(STEP.SELECT_PHOTO)

	if (!imgUrl) return null

	return (
		<Wrapper>
			<Text>
				The selected area will be shown on your page.
				<br />
				If the image is not oriented correctly, the photo can be rotated.
			</Text>

			<div>
				<AvatarEditor ref={editorRef} image={imgUrl} width={400} height={400} borderRadius={1000} />
			</div>

			<ButtonGroup>
				<Button variant={'primary'} onClick={handlerPublishPost}>
					Save and continue
				</Button>
				<Button onClick={handlerBackStep}>Come back</Button>
			</ButtonGroup>
		</Wrapper>
	)
}
