import { css } from 'styled-components'

export const scrollStyles = css`
	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		margin: 15px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.messages.send_btn};
		border-radius: 10px;
	}
`
