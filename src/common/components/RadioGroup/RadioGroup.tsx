import { ChangeEvent } from 'react'
import styled from 'styled-components'

type OptionsType = {
	value: string
	label: string
}

type PropsType = {
	options: OptionsType[]
	checkedValue: string
	onChangeValue: (value: string) => void
}

export const RadioGroup = ({ options, checkedValue, onChangeValue }: PropsType) => {
	const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeValue(event.target.value)
	}

	return (
		<RadioWrapper>
			{options.map((option) => (
				<RadioOption key={option.value}>
					<RadioInput
						type="radio"
						name="radio"
						value={option.value}
						checked={checkedValue === option.value}
						onChange={handleOptionChange}
					/>
					<RadioControl checked={checkedValue === option.value} />
					<RadioLabel checked={checkedValue === option.value}>{option.label}</RadioLabel>
				</RadioOption>
			))}
		</RadioWrapper>
	)
}

const RadioWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const RadioOption = styled.label`
	display: flex;
	align-items: center;
	margin-right: 16px;
	cursor: pointer;
	font-size: 16px;
`

const RadioInput = styled.input`
	opacity: 0;
	position: absolute;
	z-index: -1;
`

const RadioControl = styled.div<{ checked: boolean }>`
	display: inline-block;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.font.primary};
	margin-right: 8px;
	background-color: ${(props) => (props.checked ? props.theme.colors.font.linkC : 'transparent')};
`

const RadioLabel = styled.span<{ checked: boolean }>`
	font-size: 16px;
	color: ${(props) => (props.checked ? props.theme.colors.font.primary : '#999')};
`
