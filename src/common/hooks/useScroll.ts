import { useEffect, useState } from 'react'

/**
 Custom React hook that allows for infinite scrolling by detecting when
 the user has reached the bottom of the page and setting a flag to fetch more data.

 @returns {Object} An object containing the current page number and a function to set the isFetching flag.
 */

export const useScroll = () => {
	const [page, setPage] = useState(1)
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		if (isFetching) {
			setPage((prev) => prev + 1)
		}
	}, [isFetching])

	useEffect(() => {
		const handlerScroll = (e: any) => {
			const scrollHeight = e.target.documentElement.scrollHeight
			const currentHeight = e.target.documentElement.scrollTop + window.innerHeight

			if (currentHeight + 1 >= scrollHeight) {
				setIsFetching(true)
			}
		}

		document.addEventListener('scroll', handlerScroll)

		return () => {
			document.removeEventListener('scroll', handlerScroll)
		}
	}, [])

	return { page, setIsFetching }
}
