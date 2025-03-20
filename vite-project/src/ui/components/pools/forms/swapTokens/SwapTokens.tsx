import { FC } from 'react'
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import PoolService from '../../../../../service/poolService/PoolService.ts'
import FactoryService from '../../../../../service/factoryService/FactoryService.ts'
import { useGetGlobalContext } from '../../../../../core/context/Context.tsx'
interface SwapProps {
  aName: string
  poolAddres: string
}
const SwapTokens: FC<SwapProps> = ({ aName, poolAddres }) => {
  const { wallet } = useGetGlobalContext()
  const submitSwap = async (event: any) => {
    event.preventDefault()
    const countToken = event.target[0].value * 10 * 12
    const A = event.target[1].checked
    await new PoolService(poolAddres).swapToken(countToken, A, wallet)
    await FactoryService.getPools()
  }
  return (
    <div className={'text-center d-flex flex-column justify-content-center align-items-center m-lg-3'}>
      <p className={'fw-bold fs-3'}>Обмен токенов</p>
      <Form onSubmit={submitSwap} style={{ width: '25rem' }}>
        <FormGroup>
          <FormLabel column={'lg'}>Введите желаемое количетсво токенов для обмена</FormLabel>
          <FormControl placeholder={'кол-во токена'}></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel column={'lg'}>Вы вкладываете токен {aName}?</FormLabel>
          <FormCheck type={'switch'}></FormCheck>
        </FormGroup>
        <Button variant={'success'} type={'submit'}>
          Создать пул
        </Button>
      </Form>
    </div>
  )
}
export { SwapTokens }
