export async function saveToLocalStorage(key: string, value: any) {
	try {
		const serializedState = JSON.stringify(value)

		localStorage.setItem(key, serializedState)
	} catch (e) {
		// Ignore
	}
}
