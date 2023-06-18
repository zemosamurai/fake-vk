import styled, { keyframes } from 'styled-components'

const animloader = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`

export const LinerProgress = styled.div`
	width: 100%;
	height: 3px;
	display: inline-block;
	top: 0;
	left: 0;
	position: absolute;
	overflow: hidden;

	&::after {
		content: '';
		width: 200px;
		height: 3px;
		background: ${({ theme }) => theme.colors.font.primary};
		position: absolute;
		border-radius: 10%;
		top: 0;
		left: 0;
		box-sizing: border-box;
		animation: ${animloader} 1s linear infinite;
	}
`
