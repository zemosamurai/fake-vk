import { useEffect, useRef, useState } from 'react'

import { emojiPeople } from './emojiData.ts'
import { Button, DropDownContainer, DropdownContent, EmojiIcon } from './styled.ts'

type PropsType = {
	setEmojiIcon: (emoji: string) => void
}

export const Emoji = ({ setEmojiIcon }: PropsType) => {
	const [isShow, setIsShow] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const iconRef = useRef(null)

	useEffect(() => {
		const handlerClickOutline = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node) && e.target !== iconRef.current) {
				setIsShow(false)
			}
		}

		window.addEventListener('click', handlerClickOutline)
		return () => {
			window.removeEventListener('click', handlerClickOutline)
		}
	}, [])

	const handlerToggle = () => setIsShow(!isShow)
	const handlerSetIcon = (e: any) => {
		setEmojiIcon(e.target.outerText)
	}

	return (
		<DropDownContainer>
			<Button type={'button'} onClick={handlerToggle} ref={iconRef}>
				☺
			</Button>
			{isShow && (
				<DropdownContent ref={menuRef}>
					{emojiPeople.map((el, i) => (
						<EmojiIcon key={i} onClick={handlerSetIcon}>
							{el}
						</EmojiIcon>
					))}
				</DropdownContent>
			)}
		</DropDownContainer>
	)
}
