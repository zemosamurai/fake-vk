import { useCallback, useState } from 'react'

import { Container, Tab, TabPanel, Tabs } from 'src/common/components'
import { TabsType } from 'src/common/components/Tabs/Tabs.tsx'
import { useAppSelector } from 'src/common/hooks'

import { AvatarAndStatus } from 'src/features/profile/editProfile/avatarAndStatus/AvatarAndStatus.tsx'
import { General } from 'src/features/profile/editProfile/general/General.tsx'
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
						Avatar and status
					</Tab>

					<Tab value={'tab-2'} currentValue={currentTab} onClick={changeTabHandler}>
						General
					</Tab>
				</Tabs>

				<TabPanel value={'tab-1'} currentValue={currentTab}>
					<AvatarAndStatus />
				</TabPanel>

				<TabPanel value={'tab-2'} currentValue={currentTab}>
					<General />
				</TabPanel>
			</ContentContainer>
		</Container>
	)
}
