import styled from 'styled-components'

export const ProfileImg = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
`

export const DropDownContainer = styled.div`
	position: relative;
	cursor: pointer;
`

export const DropdownContent = styled.div`
	position: absolute;
	top: 40px;
	right: -1px;
	min-width: 160px;
	padding-top: 12px;
	padding-bottom: 8px;

	background-color: ${({ theme }) => theme.colors.bg.secondary};
	border-radius: 0 0 12px 12px;
	border: 1px solid ${({ theme }) => theme.colors.bg.border_primary};
	box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3);
`
