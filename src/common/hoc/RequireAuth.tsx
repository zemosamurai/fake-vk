import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { PATH } from 'src/pages/path.ts'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'
import { AuthEnum } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

type PropsType = {
	children: ReactNode
}

export const RequireAuth = ({ children }: PropsType) => {
	const { data } = useAuthMeQuery()

	if (data?.resultCode === AuthEnum.NotAuthorized) return <Navigate to={PATH.LOGIN} />

	return <>{children}</>
}
