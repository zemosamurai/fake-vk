import { useCallback, useState } from 'react'

import { Container, Tab, TabPanel, Tabs } from 'src/common/components'
import { TabsType } from 'src/common/components/Tabs/Tabs.tsx'
import { useAppSelector } from 'src/common/hooks'

import { ContentContainer, Title } from 'src/features/profile/editProfile/styled.ts'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

export const EditProfile = () => {
	const [currentTab, setCurrentTab] = useState<TabsType>('tab-1')
	const ownerId = useAppSelector((state) => state.auth.authData.id)
	const { data: dataStatus } = useGetStatusQuery(ownerId)
	const { data: dataProfile } = useGetProfileQuery(ownerId)

	const changeTabHandler = useCallback((value: TabsType) => {
		setCurrentTab(value)
	}, [])

	return (
		<Container>
			<Title>{dataProfile?.fullName}, update your profile.</Title>
			<ContentContainer>
				<Tabs>
					<Tab value={'tab-1'} currentValue={currentTab} onClick={changeTabHandler}>
						Profile & Status
					</Tab>

					<Tab value={'tab-2'} currentValue={currentTab} onClick={changeTabHandler}>
						About data
					</Tab>
				</Tabs>

				<TabPanel value={'tab-1'} currentValue={currentTab}>
					CONTENT-1
				</TabPanel>

				<TabPanel value={'tab-2'} currentValue={currentTab}>
					CONTENT-2
				</TabPanel>
			</ContentContainer>
		</Container>
	)
}
