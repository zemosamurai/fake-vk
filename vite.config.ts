import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	base: '/fake-vk',
	server: {
		port: 3000,
		host: true,
	},
})
