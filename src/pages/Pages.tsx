import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout } from 'src/common/components/Layout/AuthLayout/AuthLayout.tsx'
import { BaseLayout } from 'src/common/components/Layout/BaseLayoyt/BaseLayout.tsx'
import { NotFound } from 'src/common/components/NotFound/NotFound.tsx'

import { Login } from 'src/features/auth/login/Login.tsx'
import { Chat } from 'src/features/chat/Chat.tsx'
import { DialogPage } from 'src/features/dialogPage/DialogPage.tsx'
import { Dialogs } from 'src/features/dialogs/Dialogs.tsx'
import { Friends } from 'src/features/friends/Friends.tsx'
import { Music } from 'src/features/music/Music.tsx'
import { News } from 'src/features/news/News.tsx'
import { Profile } from 'src/features/profile/Profile.tsx'
import { EditProfile } from 'src/features/profile/editProfile/EditProfile.tsx'
import { Users } from 'src/features/users/Users.tsx'

import { PATH } from 'src/pages/path.ts'

export const Pages = () => (
	<Routes>
		<Route path={'/'} element={<BaseLayout />}>
			<Route index element={<Navigate to={PATH.NEWS} />} />
			<Route path={`${PATH.PROFILE}/:userId`} element={<Profile />} />
			<Route path={PATH.PROFILE_EDIT} element={<EditProfile />} />
			<Route path={PATH.NEWS} element={<News />} />
			<Route path={PATH.FRIENDS} element={<Friends />} />
			<Route path={PATH.USERS} element={<Users />} />
			<Route path={PATH.DIALOGS} element={<Dialogs />} />
			<Route path={`${PATH.DIALOG_PAGE}/:userId`} element={<DialogPage />} />
			<Route path={PATH.CHAT} element={<Chat />} />
			<Route path={PATH.MUSIC} element={<Music />} />
		</Route>

		<Route element={<AuthLayout />}>
			<Route path={PATH.LOGIN} element={<Login />} />
		</Route>
		<Route path={'*'} element={<Navigate to={PATH.NOT_FOUND} />} />
		<Route path={PATH.NOT_FOUND} element={<NotFound />} />
	</Routes>
)
