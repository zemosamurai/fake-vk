import styled from 'styled-components'

export const DropDownContainer = styled.div`
	position: relative;
	cursor: pointer;
`

export const DropdownContent = styled.div`
	position: absolute;
	display: flex;
	column-gap: 10px;
	row-gap: 10px;
	flex-wrap: wrap;
	bottom: 60px;
	right: 0;
	width: 240px;
	padding: 12px;

	background-color: ${({ theme }) => theme.colors.messages.bg};
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.messages.border};
`

export const EmojiIcon = styled.p`
	font-size: 16px;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	margin: 0 10px;
	padding-bottom: 5px;
	color: ${({ theme }) => theme.colors.messages.send_btn};
	font-size: 30px;

	&:hover {
		color: ${({ theme }) => theme.colors.messages.send_btn_hover};
	}
`
