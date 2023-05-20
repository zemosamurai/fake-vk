import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
	position: relative;
`

export const Input = styled.input`
	width: 100%;
	height: 36px;
	padding: 8px 36px 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.16);
	border-radius: 8px;
	background-color: #f0f2f5;
	font-size: ${({ theme }) => theme.sizes.font.m};
`

const styledIcon = css`
	cursor: pointer;
	position: absolute;
	right: 10px;
	top: 8px;
	width: 20px;
	height: 20px;
`

export const OpenGlassIcon = styled(AiFillEye)`
	${styledIcon}
`

export const CloseGlassIcon = styled(AiFillEyeInvisible)`
	${styledIcon}
`
