import { useState } from 'react'
import { useForm } from 'react-hook-form'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { LoaderIsFetchingScroll } from 'src/common/components'
import { Portal } from 'src/common/components/Portal/Portal.tsx'

import { EditPhoto } from 'src/features/profile/editProfile/avatarAndStatus/editPhoto/EditPhoto.tsx'
import { PublicationCompleted } from 'src/features/profile/editProfile/avatarAndStatus/publicationCompleted/PublicationCompleted.tsx'
import { SelectPhoto } from 'src/features/profile/editProfile/avatarAndStatus/selectPhoto/SelectPhoto.tsx'
import {
	ButtonAdd,
	ImageContainer,
	InputEdit,
	InputWrapper,
	ProfileImg,
	Wrapper,
} from 'src/features/profile/editProfile/avatarAndStatus/styled.ts'

import { useUpdateStatusMutation } from 'src/services/samuraiAPI/profileAPI.ts'
import { PhotosType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type PropsType = {
	status: string
	photos: PhotosType
}

export enum STEP {
	SELECT_PHOTO = 0,
	EDIT_PHOTO = 1,
	PUBLICATION_COMPLETED = 2,
}
const headerTitles = {
	['0']: 'Uploading a new photo',
	['1']: 'Photo on your page',
	['2']: '',
}

export const AvatarAndStatus = ({ status, photos }: PropsType) => {
	const [open, setOpen] = useState(false)
	const [editPhoto, setEditPhoto] = useState<string | null>(null)
	const [step, setStep] = useState(0)
	const [updateStatus, { isLoading }] = useUpdateStatusMutation()
	const { register, handleSubmit } = useForm<{ status: string }>({
		defaultValues: { status: status },
	})

	const handlerSubmit = (data: { status: string }) => {
		updateStatus(data)
	}

	const handlerOpenModal = () => setOpen(true)
	const handlerCloseModal = () => {
		setOpen(false)
		setStep(0)
		setEditPhoto(null)
	}

	const handlerSelectPhoto = (img: File) => {
		const imgUrl = URL.createObjectURL(img)
		console.log(imgUrl)
		setEditPhoto(imgUrl)
		setStep(STEP.EDIT_PHOTO)
	}

	return (
		<Wrapper>
			{isLoading && <LoaderIsFetchingScroll />}

			<ImageContainer onClick={handlerOpenModal}>
				<ProfileImg src={photos.large || baseProfilePhoto} alt="profile avatar" />
			</ImageContainer>

			<InputWrapper onSubmit={handleSubmit(handlerSubmit)}>
				<InputEdit placeholder={'enter status'} {...register('status')} />
				<ButtonAdd type={'submit'}>+</ButtonAdd>
			</InputWrapper>

			<Portal title={headerTitles[step as 0 | 1 | 2]} show={open} closeModal={handlerCloseModal}>
				{step === STEP.SELECT_PHOTO && <SelectPhoto onSelectPhoto={handlerSelectPhoto} />}
				{step === STEP.EDIT_PHOTO && <EditPhoto imgUrl={editPhoto} setStep={setStep} />}
				{step === STEP.PUBLICATION_COMPLETED && <PublicationCompleted />}
			</Portal>
		</Wrapper>
	)
}
