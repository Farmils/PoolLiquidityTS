import { createBrowserRouter } from 'react-router-dom'
import { PoolPage } from '../../ui/pages/poolPage/PoolPage.tsx'
import { ReactNode } from 'react'
import { AuthorizationPage } from '../../ui/pages/authorizationPage/AuthorizationPage.tsx'
import { ProfilePage } from '../../ui/pages/profilePage/ProfilePage.tsx'

type Route = {
  path: string
  element: ReactNode
}

const routes: Route[] = [
  { path: '/pool', element: <PoolPage /> },
  { path: '/', element: <AuthorizationPage /> },
  { path: '/profile', element: <ProfilePage /> },
]
const router = createBrowserRouter(routes)
export { router }
