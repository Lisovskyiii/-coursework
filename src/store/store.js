import { configureStore } from '@reduxjs/toolkit'

import reports from '../modules/CardList/CardListSlice'

export const store = configureStore({
	reducer: { reports },
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})
