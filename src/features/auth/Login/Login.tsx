import { Navigate } from 'react-router-dom'

import { ReactComponent as Image } from 'src/assets/image/login-img.svg'

import { LoginForm } from 'src/features/auth/Login/LoginForm.tsx'
import { Container, Title, WrapperForm, WrapperImage } from 'src/features/auth/Login/styled.ts'

import { useAuthMeQuery } from 'src/services/samuraiAPI/authAPI.ts'
import { AuthEnum } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

export const Login = () => {
	const { data } = useAuthMeQuery()
	if (data?.resultCode === AuthEnum.Authorized) return <Navigate to={'/'} />

	return (
		<Container>
			<WrapperImage>
				<Image />
			</WrapperImage>
			<WrapperForm>
				<Title>Login Form</Title>
				<LoginForm />
			</WrapperForm>
		</Container>
	)
}
