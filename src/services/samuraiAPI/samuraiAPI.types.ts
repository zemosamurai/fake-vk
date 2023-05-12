export type ResponseType<T = {}> = {
  data: T
  resultCode: number
  messages: string[]
}
export type PhotosType = {
  small: string;
  large: string;
}

type UserType = {
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
  id: string
  email: string
  login: string
}
export type LoginParamsType = {
  email: string
  password: string
  rememberMe?: boolean
}

export type GetProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosType;
}
export type ContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}

