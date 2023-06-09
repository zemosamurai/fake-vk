import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Container, LoaderFullWidth, LoaderIsFetchingScroll, SearchPanel } from 'src/common/components'
import { useScroll } from 'src/common/hooks/useScroll.ts'

import { UsersContainer } from 'src/features/users/styled.ts'
import { User } from 'src/features/users/user/User.tsx'

import { UserType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'
import { useGetUsersQuery } from 'src/services/samuraiAPI/usersAPI.ts'

export const Users = () => {
	const { page, setIsFetching, setPage } = useScroll()
	const [users, setUsers] = useState<UserType[]>([])
	const [term, setTerm] = useState('')
	const { data, isLoading, isFetching, error } = useGetUsersQuery({ friend: false, term, count: 24, page })

	useEffect(() => {
		if (!data?.error && data?.items) {
			if (page > 1) {
				setUsers((prev) => [...prev, ...data.items])
				setIsFetching(false)
			} else {
				setUsers(data.items)
			}
		}
	}, [data])

	const handlerSearchClick = useCallback((searchValue: string) => {
		setPage(1)
		setTerm(searchValue)
	}, [])

	if (isLoading) return <LoaderFullWidth />
	if (error || data?.error) {
		if (data?.error) {
			toast.error(data.error)
		} else {
			toast.error('unexpected error')
		}
	}

	return (
		<Container>
			<SearchPanel placeholder={'enter request'} onClick={handlerSearchClick} />
			<UsersContainer>
				{users.map((el) => (
					<User key={el.id} id={el.id} name={el.name} photos={el.photos.large} followed={el.followed} />
				))}
			</UsersContainer>
			{isFetching && <LoaderIsFetchingScroll />}
		</Container>
	)
}
