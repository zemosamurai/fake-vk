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
export enum FollowUnfollow {
	OK = 0,
	BadRequest = 1,
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
	captcha?: string
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

export type DialogType = {
	id: number
	userName: string
	hasNewMessages: boolean
	lastDialogActivityDate: string
	lastUserActivityDate: string
	newMessagesCount: number
	photos: PhotosType
}

export type MessageType = {
	id: string
	body: string
	addedAt: string
	senderId: number
	senderName: string
	recipientId: number
	viewed: boolean
}

export type MessagesType = {
	items: MessageType[]
	totalCount: number
	error: null | string
}
