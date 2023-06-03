import { samuraiAPI } from 'src/services/samuraiAPI/samuraiAPI.ts'

const securityAPI = samuraiAPI.injectEndpoints({
	endpoints: (build) => ({
		getCaptcha: build.query<{ url: string }, undefined>({
			query: () => ({
				url: 'security/get-captcha-url',
			}),
		}),
	}),
})

export const { useGetCaptchaQuery } = securityAPI
