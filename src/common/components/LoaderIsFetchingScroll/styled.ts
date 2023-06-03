import styled from 'styled-components'

export const Wrapper = styled.span`
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
`

export const Loader = styled.span`
	width: 100%;
	height: 3px;
	display: inline-block;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		width: 96px;
		height: 3px;
		background: ${({ theme }) => theme.colors.loaderColor};
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		animation: hitZak 0.6s ease-in-out infinite alternate;
	}

	@keyframes hitZak {
		0% {
			left: 0;
			transform: translateX(-1%);
		}
		100% {
			left: 100%;
			transform: translateX(-99%);
		}
	}
`
