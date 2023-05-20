import friendIcon from 'src/assets/icon/friend.svg'
import homeIcon from 'src/assets/icon/home.svg'
import messageIcon from 'src/assets/icon/message.svg'
import musicIcon from 'src/assets/icon/music.svg'
import newsIcon from 'src/assets/icon/news.svg'

import { PATH } from 'src/pages/path.ts'

import { Container, IconWrapper, LinkEl } from './styled.ts'

const navigates = [
	{ id: 1, title: 'My profile', path: PATH.PROFILE, icon: homeIcon },
	{ id: 2, title: 'News', path: PATH.NEWS, icon: newsIcon },
	{ id: 3, title: 'Messages', path: PATH.MESSAGES, icon: messageIcon },
	{ id: 4, title: 'Friends', path: PATH.FRIENDS, icon: friendIcon },
	{ id: 5, title: 'Music', path: PATH.MUSIC, icon: musicIcon },
]

export const Sidebar = () => {
	const linksListJSX = navigates.map((el) => (
		<LinkEl key={el.id} to={el.path}>
			<IconWrapper>
				<img width={20} height={20} src={el.icon} alt={`icon`} />
			</IconWrapper>
			<span>{el.title}</span>
		</LinkEl>
	))

	return <Container>{linksListJSX}</Container>
}
