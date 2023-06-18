import { useState } from 'react'
import { useForm } from 'react-hook-form'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { LinerProgress } from 'src/common/components/LinerProgress/LinerProgress.ts'
import { Portal } from 'src/common/components/Portal/Portal.tsx'

import { EditPhoto } from 'src/features/profile/editProfile/avatarAndStatus/editPhoto/EditPhoto.tsx'
import { PublicationCompleted } from 'src/features/profile/editProfile/avatarAndStatus/publicationCompleted/PublicationCompleted.tsx'
import { SelectPhoto } from 'src/features/profile/editProfile/avatarAndStatus/selectPhoto/SelectPhoto.tsx'
import {
	ButtonAdd,
	FlexItem,
	ImageContainer,
	InputEdit,
	InputWrapper,
	ProfileImg,
	Wrapper,
} from 'src/features/profile/editProfile/avatarAndStatus/styled.ts'
import { Description, FlexText, Line, TitleField } from 'src/features/profile/editProfile/styled.ts'

import { useUpdateStatusMutation } from 'src/services/samuraiAPI/profileAPI.ts'
import { PhotosType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export enum STEP {
	SELECT_PHOTO = 0,
	EDIT_PHOTO = 1,
	PUBLICATION_COMPLETED = 2,
}
const headerTitles = {
	['0']: 'Uploading a new photo',
	['1']: 'Photo on your page',
	['2']: 'Completion',
}

type PropsType = {
	status: string
	photos: PhotosType
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
		setStep(STEP.SELECT_PHOTO)
		setEditPhoto(null)
	}

	const handlerSelectPhoto = (img: File) => {
		const imgUrl = URL.createObjectURL(img)
		setEditPhoto(imgUrl)
		setStep(STEP.EDIT_PHOTO)
	}

	return (
		<Wrapper>
			{isLoading && <LinerProgress />}

			<FlexItem>
				<FlexText>
					<TitleField>Upload a photo</TitleField>
					<Description>It will help your friends to recognize among many names.</Description>
				</FlexText>

				<ImageContainer onClick={handlerOpenModal}>
					<ProfileImg src={photos.large || baseProfilePhoto} alt="profile avatar" />
				</ImageContainer>
			</FlexItem>
			<Line />

			<FlexItem>
				<FlexText>
					<TitleField>Write status</TitleField>
					<Description>You can leave your point of view, quote or anecdote.</Description>
				</FlexText>

				<InputWrapper onSubmit={handleSubmit(handlerSubmit)}>
					<InputEdit placeholder={'enter status'} {...register('status')} />
					<ButtonAdd disabled={isLoading} type={'submit'}>
						+
					</ButtonAdd>
				</InputWrapper>
			</FlexItem>

			<Portal title={headerTitles[step as 0 | 1 | 2]} show={open} closeModal={handlerCloseModal}>
				{step === STEP.SELECT_PHOTO && <SelectPhoto onSelectPhoto={handlerSelectPhoto} />}
				{step === STEP.EDIT_PHOTO && <EditPhoto imgUrl={editPhoto} setStep={setStep} />}
				{step === STEP.PUBLICATION_COMPLETED && <PublicationCompleted />}
			</Portal>
		</Wrapper>
	)
}
