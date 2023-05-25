import { ChangeEvent } from 'react'

import { Input, Slider, Switch } from 'src/common/components/Toggle/styled'

type PropsType = {
	checked: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Toggle = ({ onChange, checked }: PropsType) => {
	return (
		<Switch>
			<Input type={'checkbox'} checked={checked} onChange={onChange} />
			<Slider />
		</Switch>
	)
}
