import { ChangeEvent, memo, useState } from 'react'

import { Button, Input, SearchIcon, Wrapper } from 'src/common/components/SearchPanel/styled.ts'

type PropsType = {
	placeholder?: string
	onClick: (searchValue: string) => void
}

export const SearchPanel = memo(({ placeholder, onClick }: PropsType) => {
	const [searchValue, setSearchValue] = useState('')

	const handlerSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)
	}

	const handlerSearchClick = () => {
		onClick(searchValue.trim())
	}

	return (
		<Wrapper>
			<Input type="text" onChange={handlerSearchValue} placeholder={placeholder} />
			<Button onClick={handlerSearchClick}>
				<SearchIcon />
			</Button>
		</Wrapper>
	)
})
