import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const samuraiAPI = createApi({
	reducerPath: 'samuraiAPI',
	tagTypes: ['Auth', 'Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
		credentials: 'include',
		headers: {
			'API-KEY': '1ca39a4d-d853-4a20-a00f-44d820565400',
		},
	}),
	endpoints: () => ({}),
})
