import { FC } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import FactoryService from '../../../../../service/factoryService/FactoryService.ts'
import { useGetGlobalContext } from '../../../../../core/context/Context.tsx'

const CreatePool: FC = () => {
  const { wallet } = useGetGlobalContext()
  const submitCreate = async (event: any): Promise<void> => {
    event.preventDefault()
    const tokenA: string = event.target[0].value
    const tokenB: string = event.target[1].value
    const countA: number = event.target[2].value * 10 ** 12
    const countB: number = event.target[3].value * 10 ** 12
    await FactoryService.createPool(tokenA, tokenB, countA, countB, wallet)
    await FactoryService.getPools()
  }
  return (
    <div className={'text-center text-white d-flex flex-column justify-content-center align-items-center m-lg-3'}>
      <p className={'fw-bold fs-3'}>Добавление пула</p>
      <Form onSubmit={submitCreate} style={{ width: '25rem' }}>
        <FormGroup>
          <FormLabel column={'lg'}>Введите адрес 1-го токена</FormLabel>
          <FormControl placeholder={'адрес 1-го токена'}></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel column={'lg'}>Введите адрес 2-го токена</FormLabel>
          <FormControl placeholder={'адрес 2-го токена'}></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel column={'lg'}>Введите кол-во 1-го токена</FormLabel>
          <FormControl placeholder={'кол-во 1-го токена'}></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel column={'lg'}>Введите кол-во 1-го токена</FormLabel>
          <FormControl placeholder={'кол-во 2-го токена'}></FormControl>
        </FormGroup>
        <Button variant={'success'} type={'submit'}>
          Создать пул
        </Button>
      </Form>
    </div>
  )
}
export { CreatePool }
