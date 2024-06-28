import { LoginPage } from './pages/LoginPage'
import { MainPage } from './pages/MainPage'
import { SingleReportPage } from './pages/SingleReportPage'

export const privateRoutes = [
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reports/:id',
    element: <SingleReportPage />
  }
]

export const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />
  }
]
