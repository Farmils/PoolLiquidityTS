import { FC } from 'react'
import { Header } from '../../components/header/Header.tsx'
import { PoolInform } from '../../components/pools/poolInform/PoolInform.tsx'
import { CreatePool } from '../../components/pools/forms/create/CreatePool.tsx'
import { useGetGlobalContext } from '../../../core/context/Context.tsx'

const PoolPage: FC = () => {
  const { wallet } = useGetGlobalContext()
  return (
    <>
      <Header />
      {wallet === '' ? <></> : <CreatePool />}
      <PoolInform />
    </>
  )
}
export { PoolPage }
