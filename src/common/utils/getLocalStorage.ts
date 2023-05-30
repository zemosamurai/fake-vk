export function getFromLocalStorage(key: string) {
	try {
		const serializedState = localStorage.getItem(key)

		if (!serializedState) return undefined

		return JSON.parse(serializedState)
	} catch (e) {
		return undefined
	}
}
