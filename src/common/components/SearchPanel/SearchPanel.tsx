import { memo } from 'react'

import { Button, Input, SearchIcon, Wrapper } from 'src/common/components/SearchPanel/styled.ts'

type PropsType = {
	placeholder?: string
	onClick: () => void
}

export const SearchPanel = memo(({ placeholder, onClick }: PropsType) => {
	return (
		<Wrapper>
			<Input type="text" placeholder={placeholder} />
			<Button onClick={onClick}>
				<SearchIcon />
			</Button>
		</Wrapper>
	)
})
