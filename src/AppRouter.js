import { Route, Routes, useNavigate } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'
import { publicRoutes, privateRoutes } from './routes'
import { useEffect } from 'react'

export const AppRouter = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		isAuth ? navigate('') : navigate('login')
	}, [isAuth])

	return isAuth ? (
		<Routes>
			{privateRoutes.map(({ path, element }, i) => (
				<Route key={i} path={path} element={element}></Route>
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, element }, i) => (
				<Route key={i} path={path} element={element}></Route>
			))}
		</Routes>
	)
}
