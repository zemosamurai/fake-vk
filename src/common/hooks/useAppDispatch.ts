import { useDispatch } from 'react-redux'

import { AppDispatch } from 'src/app/store.ts'

export const useAppDispatch: () => AppDispatch = useDispatch
