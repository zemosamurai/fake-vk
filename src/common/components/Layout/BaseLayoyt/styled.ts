import styled from 'styled-components'

export const Container = styled.div`
	width: ${({ theme }) => theme.sizes.layout};
	margin: 60px auto 0;
	padding: 0 15px;

	display: flex;
	justify-content: center;
	column-gap: 16px;
`

export const ContainerWrapper = styled.div`
	width: ${({ theme }) => theme.sizes.body};
`
