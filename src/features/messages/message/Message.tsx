type PropsType = {
	message: string
	photo: string
	userName: string
}

export const Message = ({ message, userName, photo }: PropsType) => {
	return (
		<div>
			<img src={photo} alt={'user photo'} />
			<p>{userName}</p>
			<p>{message}</p>
		</div>
	)
}
