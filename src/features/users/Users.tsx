import { useEffect, useState } from 'react'

import { Container, SearchPanel } from 'src/common/components'
import { useScroll } from 'src/common/hooks/useScroll.ts'

import { UsersContainer } from 'src/features/users/styled.ts'
import { User } from 'src/features/users/user/User.tsx'

import { UserType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'
import { useGetUsersQuery } from 'src/services/samuraiAPI/usersAPI.ts'

export const Users = () => {
	const { page, setIsFetching } = useScroll()
	const [users, setUsers] = useState<UserType[]>([])
	const { data } = useGetUsersQuery({ friend: false, count: 24, page })

	useEffect(() => {
		if (data?.items.length) {
			setUsers((prev) => [...prev, ...data.items])
			setIsFetching(false)
		}
	}, [data])

	return (
		<Container>
			<SearchPanel placeholder={'enter request'} onClick={() => {}} />
			<UsersContainer>
				{users.map((el) => (
					<User key={el.id} id={el.id} name={el.name} photos={el.photos.large} followed={el.followed} />
				))}
			</UsersContainer>
		</Container>
	)
}
