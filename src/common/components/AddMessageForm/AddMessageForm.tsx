import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Emoji } from 'src/common/components/AddMessageForm/Emoji/Emoji.tsx'
import { Button, Input, InputContainer, SendIcon, Wrapper } from 'src/common/components/AddMessageForm/styled.ts'

import { useSendChatDevMessageMutation } from 'src/services/samuraiAPI/chatAPI.ts'

type FormData = {
	message: string
}

const validateSchema = yup.object({
	message: yup.string().required().max(100),
})

export const AddMessageForm = () => {
	const { register, handleSubmit, getValues, reset, setValue } = useForm<FormData>({
		resolver: yupResolver(validateSchema),
	})
	const [sendMessage] = useSendChatDevMessageMutation()

	const onSubmit = (data: FormData) => {
		sendMessage(data.message)
		reset()
	}

	const handlerEmojiIcon = (emoji: string) => {
		const currentValues = getValues()
		const newValues = currentValues.message + emoji
		setValue('message', newValues)
	}

	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)}>
			<InputContainer>
				<Input autoComplete={'off'} placeholder={'add message...'} {...register('message')} />
				<Emoji setEmojiIcon={handlerEmojiIcon} />
			</InputContainer>
			<Button type={'submit'}>
				<SendIcon />
			</Button>
		</Wrapper>
	)
}
