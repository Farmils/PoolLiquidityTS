import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { ContextType, PoolData, UserBalance } from './types.ts'

const Context = createContext<ContextType>({} as ContextType)

const useGetGlobalContext = () => useContext(Context)
const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState('')
  const [pool, setPool] = useState<PoolData[]>([])
  const [userData, setUserData] = useState<UserBalance | null>(null)

  const values: ContextType = {
    wallet,
    setWallet,
    pool,
    setPool,
    userData,
    setUserData,
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}
export { Context, ContextProvider, useGetGlobalContext }
