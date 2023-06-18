import styled, { keyframes } from 'styled-components'

export const LoaderContent = () => {
	return (
		<LoaderWrapper>
			<Loader />
			<Text>Loading...</Text>
		</LoaderWrapper>
	)
}

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	//background: ${({ theme }) => theme.colors.bg.primary};
	opacity: 0.9;
`

const Loader = styled.div`
	width: 20px;
	height: 20px;
	border: 3px solid ${({ theme }) => theme.colors.bg.primary};
	border-bottom-color: ${({ theme }) => theme.colors.font.primary};
	border-right-color: ${({ theme }) => theme.colors.font.primary};
	border-left-color: ${({ theme }) => theme.colors.font.primary};
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: ${rotation} 0.7s linear infinite;
`

const Text = styled.span`
	margin-left: 10px;
	color: ${({ theme }) => theme.colors.font.primary};
`
