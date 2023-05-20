import { Outlet } from 'react-router-dom'

import { Header } from 'src/common/components/Header/Header.tsx'
import { Container, ContainerWrapper } from 'src/common/components/Layout/BaseLayoyt/styled.ts'
import { Sidebar } from 'src/common/components/Sidebar/Sidebar.tsx'
import { RequireAuth } from 'src/common/hoc/RequireAuth.tsx'

export const BaseLayout = () => {
	return (
		<RequireAuth>
			<Header />
			<Container>
				<Sidebar />
				<ContainerWrapper>
					<Outlet />
				</ContainerWrapper>
			</Container>
		</RequireAuth>
	)
}
