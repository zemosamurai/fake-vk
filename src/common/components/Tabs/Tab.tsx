import { ReactNode, memo } from 'react'

import { TabsType } from 'src/common/components/Tabs/Tabs.tsx'

import { ButtonTab } from './styled.ts'

export type TabPropsType = {
	children: ReactNode
	value: TabsType
	currentValue: TabsType
	onClick: (value: TabsType) => void
}

export const Tab = memo(({ children, onClick, value, currentValue }: TabPropsType) => (
	<ButtonTab variant={currentValue === value ? 'active' : 'default'} onClick={() => onClick(value)}>
		{children}
	</ButtonTab>
))
