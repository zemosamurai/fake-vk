import { useForm } from 'react-hook-form'

import { Button, Input } from 'src/common/components'

import { FlexItems, Form } from 'src/features/profile/editProfile/general/styled.ts'

import { ContactsType, GetProfileType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type PropsType = {
	dataProfile: GetProfileType
}

type FormData = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
	fullName: string
	contacts: ContactsType
}

export const General = ({ dataProfile }: PropsType) => {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			userId: dataProfile.userId,
			aboutMe: dataProfile.aboutMe,
			contacts: dataProfile.contacts,
			fullName: dataProfile.fullName,
			lookingForAJob: dataProfile.lookingForAJob,
			lookingForAJobDescription: dataProfile.lookingForAJobDescription,
		},
	})

	return (
		<Form>
			<FlexItems>
				<p>{dataProfile.aboutMe}</p>
				<Input />
			</FlexItems>
			<Button>Save</Button>
		</Form>
	)
}
