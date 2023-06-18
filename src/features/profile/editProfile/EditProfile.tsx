import { useCallback, useState } from 'react'

import { Container, Tab, TabPanel, Tabs } from 'src/common/components'
import { LinerProgress } from 'src/common/components/LinerProgress/LinerProgress.ts'
import { TabsType } from 'src/common/components/Tabs/Tabs.tsx'
import { useAppSelector } from 'src/common/hooks'

import { AvatarAndStatus } from 'src/features/profile/editProfile/avatarAndStatus/AvatarAndStatus.tsx'
import { Contacts } from 'src/features/profile/editProfile/contacts/Contacts.tsx'
import { General } from 'src/features/profile/editProfile/general/General.tsx'
import { ContentContainer, Title } from 'src/features/profile/editProfile/styled.ts'

import { useGetProfileQuery, useGetStatusQuery } from 'src/services/samuraiAPI/profileAPI.ts'

export const EditProfile = () => {
	const [currentTab, setCurrentTab] = useState<TabsType>('tab-1')
	const [isLoading, setIsLoading] = useState(false)
	const ownerId = useAppSelector((state) => state.auth.authData.id)
	const { data: dataStatus } = useGetStatusQuery(ownerId, { skip: !ownerId })
	const { data: dataProfile } = useGetProfileQuery(ownerId, { skip: !ownerId })

	const changeTabHandler = useCallback((value: TabsType) => {
		setCurrentTab(value)
	}, [])

	if (!dataProfile) return null

	return (
		<Container>
			{isLoading && <LinerProgress />}
			<Title>{dataProfile.fullName}, update your profile.</Title>
			<ContentContainer>
				<Tabs>
					<Tab value={'tab-1'} currentValue={currentTab} onClick={changeTabHandler}>
						Avatar and status
					</Tab>

					<Tab value={'tab-2'} currentValue={currentTab} onClick={changeTabHandler}>
						General
					</Tab>

					<Tab value={'tab-3'} currentValue={currentTab} onClick={changeTabHandler}>
						Contacts
					</Tab>
				</Tabs>

				<TabPanel value={'tab-1'} currentValue={currentTab}>
					<AvatarAndStatus status={dataStatus ? dataStatus : ''} photos={dataProfile.photos} />
				</TabPanel>

				<TabPanel value={'tab-2'} currentValue={currentTab}>
					<General dataProfile={dataProfile} setIsLoading={setIsLoading} />
				</TabPanel>

				<TabPanel value={'tab-3'} currentValue={currentTab}>
					<Contacts dataProfile={dataProfile} setIsLoading={setIsLoading} />
				</TabPanel>
			</ContentContainer>
		</Container>
	)
}
