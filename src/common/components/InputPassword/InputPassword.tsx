import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react'

import { CloseGlassIcon, Input, InputContainer, OpenGlassIcon } from 'src/common/components/InputPassword/styled.ts'

type DefaultInputPropsType = InputHTMLAttributes<HTMLInputElement>

export const InputPassword = forwardRef((props: DefaultInputPropsType, ref: ForwardedRef<HTMLInputElement>) => {
	const [type, setType] = useState('password')

	const handlerViewPassword = () => setType('text')
	const handlerHidePassword = () => setType('password')

	return (
		<InputContainer>
			<Input ref={ref} type={type} placeholder={'password'} autoComplete={'on'} {...props} />
			{type === 'password' && <OpenGlassIcon onClick={handlerViewPassword} />}
			{type === 'text' && <CloseGlassIcon onClick={handlerHidePassword} />}
		</InputContainer>
	)
})
