
import './App.css'
import {FC, PropsWithChildren} from "react";
import {ContextProvider} from "../../core/context/Context.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "../../core/routes/Router.tsx";


const App: FC<PropsWithChildren> = () => {
  return (
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
  )
}

export default App
