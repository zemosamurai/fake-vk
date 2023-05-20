import styled from 'styled-components'

export const Container = styled.header`
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bg.secondary};
	border-bottom: 1px solid #e7e8ec;
	height: 48px;
`

export const ContentWrapper = styled.header`
	margin: 0 auto;
	padding: 0 15px;
	width: ${({ theme }) => theme.sizes.layout};
	height: inherit;

	display: flex;
	justify-content: space-between;
	align-items: center;
`
