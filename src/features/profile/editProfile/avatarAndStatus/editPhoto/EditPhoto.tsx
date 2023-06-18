import { useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { toast } from 'react-toastify'

import { Button } from 'src/common/components'
import { LinerProgress } from 'src/common/components/LinerProgress/LinerProgress.ts'
import { dataURLtoFile } from 'src/common/utils'

import { STEP } from 'src/features/profile/editProfile/avatarAndStatus/AvatarAndStatus.tsx'
import { ButtonGroup, Text, Wrapper } from 'src/features/profile/editProfile/avatarAndStatus/editPhoto/styled.ts'

import { useSavePhotoMutation } from 'src/services/samuraiAPI/profileAPI.ts'

type PropsType = {
	imgUrl: string | null
	setStep: (step: number) => void
}

export const EditPhoto = ({ imgUrl, setStep }: PropsType) => {
	const [savePhoto, { data, isError, isLoading }] = useSavePhotoMutation()
	const editorRef = useRef<AvatarEditor>(null)

	const handlerPublishPost = () => {
		if (editorRef.current) {
			const canvas = editorRef.current.getImageScaledToCanvas()
			const file = dataURLtoFile(canvas.toDataURL(), 'avatar.jpg')

			const formData = new FormData()

			formData.append('image', file)

			savePhoto(formData)
				.unwrap()
				.then((res) => {
					if (res.resultCode === 0) {
						setStep(STEP.PUBLICATION_COMPLETED)
					}
				})
		}
	}
	const handlerBackStep = () => setStep(STEP.SELECT_PHOTO)

	if (!imgUrl) return null
	if (isError || data?.resultCode === 1) {
		console.log('rrr')
		const err = data?.messages[0]
		toast.error(err || 'Some error')
	}

	return (
		<>
			{isLoading && <LinerProgress />}
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
					<Button disabled={isLoading} variant={'primary'} onClick={handlerPublishPost}>
						Save and continue
					</Button>
					<Button disabled={isLoading} onClick={handlerBackStep}>
						Come back
					</Button>
				</ButtonGroup>
			</Wrapper>
		</>
	)
}
