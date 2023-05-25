export type ResponseType<T = {}> = {
	data: T
	resultCode: number
	messages: string[]
}
export type PhotosType = {
	small: string
	large: string
}

export type UserType = {
	name: string
	id: number
	photos: PhotosType
	status: string
	followed: boolean
}
export type GetUsersType = {
	items: UserType[]
	totalCount: number
	error: string
}
export type GetUsersParamsType = {
	count?: number
	page?: number
	term?: string
	friend?: boolean
}

export type AuthMeType = {
	id: number
	email: string
	login: string
}
export type LoginParamsType = {
	email: string
	password: string
	rememberMe?: boolean
}
export enum AuthEnum {
	Authorized = 0,
	NotAuthorized = 1,
	Captcha = 10,
}
export enum LogOutEnum {
	LogOut = 0,
	NotLogOut = 1,
}

export type GetProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}
export type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
