import { Outlet } from 'react-router-dom'

import { Header } from 'src/common/components/Header/Header.tsx'
import { Container } from 'src/common/components/Layout/AuthLayout/styled.ts'

export const AuthLayout = () => {
	return (
		<>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</>
	)
}
