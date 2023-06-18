import { toast } from 'react-toastify'

import { Button, Input } from 'src/common/components'

import { Error, FlexWrap } from 'src/features/profile/editProfile/contacts/styled.ts'
import { FormData, useContactsDataForm } from 'src/features/profile/editProfile/contacts/useContactsDataForm.ts'
import { FlexText, Form, Line, TitleField } from 'src/features/profile/editProfile/styled.ts'

import { useUpdateProfileMutation } from 'src/services/samuraiAPI/profileAPI.ts'
import { GetProfileType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type RegisterType = 'vk' | 'facebook' | 'github' | 'instagram' | 'twitter' | 'mainLink' | 'website' | 'youtube'

const dataFields = [
	{ id: 1, title: 'Vk', register: 'vk' },
	{ id: 2, title: 'Facebook', register: 'facebook' },
	{ id: 3, title: 'Github', register: 'github' },
	{ id: 4, title: 'Instagram', register: 'instagram' },
	{ id: 5, title: 'Twitter', register: 'twitter' },
	{ id: 6, title: 'Main Link', register: 'mainLink' },
	{ id: 7, title: 'Website', register: 'website' },
	{ id: 8, title: 'Youtube', register: 'youtube' },
]

type PropsType = {
	dataProfile: GetProfileType
	setIsLoading: (value: boolean) => void
}

export const Contacts = (props: PropsType) => {
	const { dataProfile } = props
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useContactsDataForm(props)

	const [updateContactsData, { data, isError, isLoading }] = useUpdateProfileMutation()

	const onSubmit = (data: FormData) => {
		props.setIsLoading(true)
		const payload = { ...dataProfile, contacts: data }
		updateContactsData(payload).finally(() => props.setIsLoading(false))
	}

	if (data?.resultCode === 1 || isError) {
		const err = data?.messages[0] || 'Some error'
		toast.error(err)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{dataFields.map((el) => {
				const registerEl = el.register as RegisterType

				return (
					<div key={el.id}>
						<FlexWrap>
							<FlexText>
								<TitleField>{el.title}</TitleField>
							</FlexText>
							<Input variant={'outlined'} {...register(`${registerEl}`)} />
							{errors[`${registerEl}`] && <Error>{errors[`${registerEl}`]?.message}</Error>}
						</FlexWrap>
						<Line />
					</div>
				)
			})}
			<Button disabled={isLoading}>Save</Button>
		</Form>
	)
}
