import { PATH } from 'src/pages/path.ts'

import { Container, FriendIcon, HomeIcon, LinkEl, MessageIcon, MusicIcon, NewsIcon } from './styled.ts'

const navigates = [
	{ id: 1, title: 'My profile', path: `${PATH.PROFILE}/owner`, icon: HomeIcon },
	{ id: 2, title: 'News', path: PATH.NEWS, icon: NewsIcon },
	{ id: 3, title: 'Messages', path: PATH.MESSAGES, icon: MessageIcon },
	{ id: 4, title: 'Friends', path: PATH.FRIENDS, icon: FriendIcon },
	{ id: 5, title: 'Music', path: PATH.MUSIC, icon: MusicIcon },
]

export const Sidebar = () => {
	const linksListJSX = navigates.map((el) => (
		<LinkEl key={el.id} to={el.path}>
			{<el.icon />}
			<span>{el.title}</span>
		</LinkEl>
	))

	return <Container>{linksListJSX}</Container>
}
