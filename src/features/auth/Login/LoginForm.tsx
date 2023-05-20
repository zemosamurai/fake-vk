import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { InputPassword } from 'src/common/components/InputPassword/InputPassword.tsx'

import { useLoginMutation } from 'src/services/samuraiAPI/authAPI.ts'
import { AuthEnum, LoginParamsType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'

import { Button, CheckboxWrapper, ErrorMessage, Form, Input } from './styled.ts'

const validateSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(3).max(25),
})

export const LoginForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginParamsType>({
		defaultValues: { rememberMe: true },
		resolver: yupResolver(validateSchema),
	})
	const [login] = useLoginMutation()

	const onSubmit = (dataForm: LoginParamsType) => {
		login(dataForm)
			.unwrap()
			.then((res) => {
				if (res.resultCode === AuthEnum.Captcha) {
					console.log('Enter CAPTCHA')
				}
			})
		reset()
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

			<CheckboxWrapper>
				<input type={'checkbox'} {...register('rememberMe')} />
				<p>remember me</p>
			</CheckboxWrapper>
			<Button type={'submit'}>Login</Button>
		</Form>
	)
}
