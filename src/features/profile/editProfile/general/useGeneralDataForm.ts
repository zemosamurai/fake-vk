import { useForm } from 'react-hook-form'

import { ContactsType, GetProfileType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export type FormData = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
	fullName: string
	contacts: ContactsType
}

type PropsType = {
	dataProfile: GetProfileType
}

export const useContactsDataForm = ({ dataProfile }: PropsType) => {
	return useForm<FormData>({
		defaultValues: {
			userId: dataProfile.userId,
			aboutMe: dataProfile.aboutMe,
			contacts: dataProfile.contacts,
			fullName: dataProfile.fullName,
			lookingForAJob: dataProfile.lookingForAJob,
			lookingForAJobDescription: dataProfile.lookingForAJobDescription,
		},
		mode: 'onSubmit',
	})
}
