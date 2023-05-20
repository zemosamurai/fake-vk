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
		width: 400px;
		height: 3px;
		background: #6156d3;
		position: absolute;
		border-radius: 25px;
		top: 0;
		left: 0;
		box-sizing: border-box;
		animation: ${animloader} 2s linear infinite;
	}
`
