import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 50px;
`

export const FlexItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 20px;
`

export const ImageContainer = styled.div`
	position: relative;
	border-radius: 50%;
	cursor: pointer;
	overflow: hidden;
	transition: 0.3s ease-in;

	&:before {
		width: 100%;
		height: 20%;
		content: 'upload';
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 0;

		background-color: ${({ theme }) => theme.colors.bg.blue};
		color: #e1e3e6;
		opacity: 0;
		transition: ease opacity 0.3s;
		transition-delay: 0s;
	}

	&:hover {
		&:before {
			opacity: 1;
			transition: ease opacity 0.3s;
			transition-delay: 0s;
		}
	}
`

export const ProfileImg = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 50%;
`

export const InputWrapper = styled.form`
	width: 380px;
	display: flex;
	align-items: center;
	row-gap: 20px;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.font.primary};
`

export const InputEdit = styled.input`
	width: 100%;
	padding: 7px 12px;
	color: ${({ theme }) => theme.colors.font.primary};
`

export const ButtonAdd = styled.button`
	color: ${({ theme }) => theme.colors.font.primary};
	background-color: ${({ theme }) => theme.colors.bg.blue};
	padding: 1px 5px;
	border-radius: 3px;
	margin-right: 10px;

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}

	&:hover {
		opacity: 0.8;
	}
`
