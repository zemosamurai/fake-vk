import { useEffect, useRef, useState } from 'react'

import baseProfilePhoto from 'src/assets/image/camera-200.png'

import { ProfileCard } from 'src/features/profile/profileLinkMenu/profileCard/ProfileCard.tsx'
import { ProfileLinks } from 'src/features/profile/profileLinkMenu/profileLinks/ProfileLinks.tsx'

import { DropDownContainer, DropdownContent, ProfileImg } from './styled.ts'

export const ProfileLinkMenu = () => {
	const [isShow, setIsShow] = useState(false)
	const menuRef = useRef(null)
	const imgRef = useRef(null)

	useEffect(() => {
		const handlerClickOutline = (e: MouseEvent) => {
			if (e.target !== menuRef.current && e.target !== imgRef.current) {
				setIsShow(false)
			}
		}
		const handlerKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsShow(false)
			}
		}

		window.addEventListener('click', handlerClickOutline)
		window.addEventListener('keydown', handlerKeyDown)
		return () => {
			window.addEventListener('click', handlerClickOutline)
			window.addEventListener('keydown', handlerKeyDown)
		}
	}, [])

	const handlerToggle = () => setIsShow(!isShow)

	return (
		<DropDownContainer>
			<ProfileImg onClick={handlerToggle} ref={imgRef} src={baseProfilePhoto} alt="small-profile-photo" />
			{isShow && (
				<DropdownContent ref={menuRef}>
					<ProfileCard />
					<ProfileLinks />
				</DropdownContent>
			)}
		</DropDownContainer>
	)
}
