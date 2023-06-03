import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, Container, LoaderFullWidth, LoaderIsFetchingScroll, SearchPanel } from 'src/common/components'
import { useScroll } from 'src/common/hooks/useScroll.ts'

import { Friend } from 'src/features/friends/friend/Friend.tsx'
import { ButtonGroup, Count, FriendsContainer, InfoPanel } from 'src/features/friends/styled.ts'

import { PATH } from 'src/pages/path.ts'

import { UserType } from 'src/services/samuraiAPI/samuraiAPI.types.ts'
import { useGetUsersQuery } from 'src/services/samuraiAPI/usersAPI.ts'

export const Friends = () => {
	const navigate = useNavigate()
	const { page, setIsFetching } = useScroll()
	const [friends, setFriends] = useState<UserType[]>([])
	const { data, error, isFetching, isLoading } = useGetUsersQuery({ friend: true, count: 10, page })

	useEffect(() => {
		if (!data?.error && data?.items.length) {
			setFriends((prev) => [...prev, ...data.items])
			setIsFetching(false)
		}
	}, [data])

	const handlerSearchClick = useCallback(() => {
		console.log('click handlerSearchClick')
	}, [])
	const handlerNavigateToAllUsers = () => navigate(PATH.USERS)

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
			<InfoPanel>
				<Count>All {data?.totalCount}</Count>
				<ButtonGroup>
					<Button onClick={handlerNavigateToAllUsers} variant={'primary'}>
						Add friends
					</Button>
				</ButtonGroup>
			</InfoPanel>
			<SearchPanel placeholder={'Search friends'} onClick={handlerSearchClick} />
			<FriendsContainer>
				{friends.map((el) => (
					<Friend key={el.id} id={el.id} name={el.name} followed={el.followed} photos={el.photos.small} />
				))}
			</FriendsContainer>
			{isFetching && <LoaderIsFetchingScroll />}
		</Container>
	)
}
