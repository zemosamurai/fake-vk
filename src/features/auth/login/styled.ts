import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: auto 0;
`

export const WrapperImage = styled.div`
	width: 50%;
	background-color: ${({ theme }) => theme.colors.bg.blue};
	border-radius: 12px 0 0 12px;
`

export const WrapperForm = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 30px;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	border-radius: 0 12px 12px 0;
`

export const Title = styled.p`
	font-size: 20px;
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	margin-bottom: 40px;
`

// -- LoginForm --
export const Form = styled.form`
	width: 300px;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`

export const CaptchaImg = styled.img`
	display: block;
	margin: 0 auto 30px;
`

export const Input = styled.input`
	width: 100%;
	height: 36px;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.16);
	border-radius: 8px;
	background-color: #f0f2f5;
	font-size: ${({ theme }) => theme.sizes.font.m};
`

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;

	& input {
		cursor: pointer;
	}

	& p {
		margin-bottom: 2px;
	}
`

export const Button = styled.button`
	width: 100%;
	height: 36px;
	padding: 8px 12px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.bg.blue};
	font-size: ${({ theme }) => theme.sizes.font.l};
	font-weight: ${({ theme }) => theme.sizes.weight.bold};
	color: #fff;
`

export const ErrorMessage = styled.p`
	position: absolute;
	margin-top: 3px;
	margin-left: 3px;
	font-size: ${({ theme }) => theme.sizes.font.xs};
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
	color: red;
`
