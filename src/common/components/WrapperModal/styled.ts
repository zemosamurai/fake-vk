import { AiOutlineClose } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(23, 23, 23, 0.82);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px;
	overflow: hidden;
	z-index: 999;
	animation-duration: 400ms;
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${fadeIn};
		animation-fill-mode: backwards;
	}

	& * {
		max-height: 95%;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 0;
		}
	}
`

export const ModalContainer = styled.div`
	min-width: 395px;
	min-height: 50px;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	position: relative;
	border-radius: 12px;
	//padding: 20px;
`

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.bg.border_primary};
`

export const ModalBody = styled.div`
	padding: 20px;
`

export const ModalTitle = styled.p`
	font-weight: ${({ theme }) => theme.sizes.weight.medium};
	font-size: ${({ theme }) => theme.sizes.font.l};
	line-height: 22px;
	color: ${({ theme }) => theme.colors.font.primary};
`

export const CloseButton = styled.button`
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.colors.bg.primary};
	}
`
export const CloseIcon = styled(AiOutlineClose)`
	width: 26px;
	height: 26px;
	padding: 5px;
	fill: ${({ theme }) => theme.colors.font.primary};
`
