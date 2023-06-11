import { memo } from 'react'

import { TabPropsType } from './Tab.tsx'
import { Content } from './styled.ts'

type PropsType = Omit<TabPropsType, 'onClick'>

export const TabPanel = memo(({ children, currentValue, value }: PropsType) => (
	<Content variant={currentValue === value ? 'block' : 'none'}>{children}</Content>
))
