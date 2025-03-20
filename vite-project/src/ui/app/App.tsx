import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FC } from 'react'
import { ContextProvider } from '../../core/context/Context.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from '../../core/routes/Router.tsx'

const App: FC = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App
