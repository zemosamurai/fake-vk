import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { InputPassword } from 'src/common/components/InputPassword/InputPassword.tsx'

import { useLoginMutation } from 'src/services/samuraiAPI/authAPI.ts'
import { AuthEnum, LoginParamsType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'
import { useGetCaptchaQuery } from 'src/services/samuraiAPI/securityAPI.ts'

import { Button, CaptchaImg, CheckboxWrapper, ErrorMessage, Form, Input } from './styled.ts'

const validateSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(3).max(25),
})

export const LoginForm = () => {
	const [getCaptcha, setGetCaptcha] = useState(true)
	const [login, { error }] = useLoginMutation()
	const { data: dataCaptcha } = useGetCaptchaQuery(undefined, { skip: getCaptcha })

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginParamsType>({
		defaultValues: { rememberMe: true },
		resolver: yupResolver(validateSchema),
	})

	const onSubmit = (dataForm: LoginParamsType) => {
		login(dataForm)
			.unwrap()
			.then((res) => {
				if (res.resultCode === AuthEnum.NotAuthorized) {
					toast.error(res.messages[0])
				}
				if (res.resultCode === AuthEnum.Captcha) {
					setGetCaptcha(false)
					toast.error(res.messages[0])
				}
			})
	}

	if (error) {
		toast.error('unexpected error')
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Input placeholder={'email'} {...register('email')} />
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</div>

			<div>
				<InputPassword {...register('password')} />
				{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
			</div>

			{dataCaptcha?.url && (
				<div>
					<CaptchaImg src={dataCaptcha.url} alt="captcha" />
					<Input placeholder={'captcha'} {...register('captcha')} />
				</div>
			)}

			<CheckboxWrapper>
				<input type={'checkbox'} {...register('rememberMe')} />
				<p>remember me</p>
			</CheckboxWrapper>
			<Button type={'submit'}>Login</Button>
		</Form>
	)
}
