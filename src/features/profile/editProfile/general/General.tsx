import { toast } from 'react-toastify'

import { Button, Input, RadioGroup, TextArea } from 'src/common/components'

import { FormData, useContactsDataForm } from 'src/features/profile/editProfile/general/useGeneralDataForm.ts'
import { Description, FlexItem, FlexText, Form, Line, TitleField } from 'src/features/profile/editProfile/styled.ts'

import { useUpdateProfileMutation } from 'src/services/samuraiAPI/profileAPI.ts'
import { GetProfileType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

const options = [
	{ value: 'yes', label: 'yes' },
	{ value: 'no', label: 'no' },
]

type PropsType = {
	dataProfile: GetProfileType
	setIsLoading: (value: boolean) => void
}

export const General = (props: PropsType) => {
	const [updateGeneralData, { data, isError, isLoading }] = useUpdateProfileMutation()
	const { register, handleSubmit, setValue, watch } = useContactsDataForm(props)

	const onSubmit = (data: FormData) => {
		props.setIsLoading(true)
		updateGeneralData(data).finally(() => props.setIsLoading(false))
	}

	const handlerChangeRadio = (value: string) => {
		const formValue = value === 'yes'

		setValue('lookingForAJob', formValue)
	}

	if (data?.resultCode === 1 || isError) {
		const err = data?.messages[0] || 'Some error'
		toast.error(err)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FlexItem>
				<FlexText>
					<TitleField>Full name</TitleField>
					<Description>The name will be visible to all users. Your friends can find you on it.</Description>
				</FlexText>
				<Input {...register('fullName')} variant={'outlined'} />
			</FlexItem>
			<Line />

			<FlexItem>
				<FlexText>
					<TitleField>About me</TitleField>
					<Description>
						Describe information about yourself. It will help other people get to know you better.
					</Description>
				</FlexText>
				<TextArea {...register('aboutMe')} />
			</FlexItem>
			<Line />

			<FlexItem>
				<FlexText>
					<TitleField>Looking for a job</TitleField>
					<Description>Recommended if you are actively looking for a job.</Description>
				</FlexText>
				<RadioGroup
					options={options}
					checkedValue={watch('lookingForAJob') ? 'yes' : 'no'}
					onChangeValue={handlerChangeRadio}
				/>
			</FlexItem>
			<Line />

			<FlexItem>
				<FlexText>
					<TitleField>Job description</TitleField>
					<Description>Description of the preferred job you are looking for.</Description>
				</FlexText>
				<TextArea {...register('lookingForAJobDescription')} />
			</FlexItem>
			<Line />

			<Button disabled={isLoading} type={'submit'}>
				Save
			</Button>
		</Form>
	)
}
