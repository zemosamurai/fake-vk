import styled from 'styled-components'

import { ReactComponent as Send } from 'src/assets/icon/send.svg'

export const Wrapper = styled.form`
	height: 64px;
	display: flex;
	background: ${({ theme }) => theme.colors.messages.bg};
	padding: 12px 20px;
	border-radius: 0 0 12px 12px;
	border-top: 1px solid ${({ theme }) => theme.colors.messages.border};
`

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colors.messages.border};
	width: 100%;
	margin-right: 20px;
	border-radius: 6px;
`

export const Input = styled.input`
	padding: 10px 15px;
	color: ${({ theme }) => theme.colors.font.primary};
	width: 100%;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
`

export const SendIcon = styled(Send)`
	fill: ${({ theme }) => theme.colors.messages.send_btn};

	${Button}:hover & {
		fill: ${({ theme }) => theme.colors.messages.send_btn_hover};
	}
`
