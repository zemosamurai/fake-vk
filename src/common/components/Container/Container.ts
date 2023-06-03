import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	box-shadow: ${({ theme }) => theme.colors.bg.box_shadow};
`
