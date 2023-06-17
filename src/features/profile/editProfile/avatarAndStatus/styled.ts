import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 50px;
	align-items: center;
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
	padding: 7px;
	margin-right: 10px;
`
