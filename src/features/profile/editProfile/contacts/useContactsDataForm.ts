import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { GetProfileType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export type FormData = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}

const validateSchema = yup.object({
	facebook: yup.string().url(),
	twitter: yup.string().url(),
	youtube: yup.string().url(),
	website: yup.string().url(),
	mainLink: yup.string().url(),
	vk: yup.string().url(),
	github: yup.string().url(),
	instagram: yup.string().url(),
})

type PropsType = {
	dataProfile: GetProfileType
}

export const useContactsDataForm = ({ dataProfile }: PropsType) => {
	return useForm<FormData>({
		defaultValues: {
			facebook: dataProfile.contacts.facebook,
			twitter: dataProfile.contacts.twitter,
			youtube: dataProfile.contacts.youtube,
			website: dataProfile.contacts.website,
			mainLink: dataProfile.contacts.mainLink,
			vk: dataProfile.contacts.vk,
			github: dataProfile.contacts.github,
			instagram: dataProfile.contacts.instagram,
		},
		mode: 'onSubmit',
		resolver: yupResolver(validateSchema),
	})
}
