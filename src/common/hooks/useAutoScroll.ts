import { Ref, UIEvent, useEffect, useRef, useState } from 'react'

type ReturnType = {
	anchorRef: Ref<HTMLDivElement>
	handlerScroll: (e: UIEvent<HTMLDivElement>) => void
}

export const useAutoScroll = (observerData: any): ReturnType => {
	const anchorRef = useRef<HTMLDivElement>(null)
	const [isAutoScroll, setIsAutoScroll] = useState(true)

	useEffect(() => {
		if (isAutoScroll) {
			anchorRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [observerData])

	const handlerScroll = (e: UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget
		if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
			setIsAutoScroll(true)
		} else {
			setIsAutoScroll(false)
		}
	}

	return {
		anchorRef,
		handlerScroll,
	}
}
