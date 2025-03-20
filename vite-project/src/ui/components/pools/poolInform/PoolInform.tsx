import { FC, useEffect } from 'react'
import { useGetGlobalContext } from '../../../../core/context/Context.tsx'
import FactoryService from '../../../../service/factoryService/FactoryService.ts'
import { PoolData } from '../../../../core/context/types.ts'
import { Card } from 'react-bootstrap'
import { SwapTokens } from '../forms/swapTokens/SwapTokens.tsx'

const PoolInform: FC = () => {
  const { setPool, pool } = useGetGlobalContext()
  useEffect(() => {
    ;(async () => {
      await FactoryService.getPools().then((data) => {
        if (data) {
          setPool(data)
        }

        console.log(data)
      })
    })()
  }, [])
  return (
    <>
      <div className={'d-flex flex-column justify-content-center align-items-center'}>
        {pool.map((value: PoolData, index: number) => (
          <Card key={index} style={{ width: '25rem' }} className={'text-center m-4'}>
            <Card.Title>
              {value.aSymbol} - {value.bSymbol}
            </Card.Title>
            <Card.Body>
              <Card.Text> Владелец: {value.poolOwner}</Card.Text>
              <Card.Text>
                Соотношение токенов {Number(value.countTokenA) / 10 ** 12} {value.aSymbol} :{' '}
                {Number(value.countTokenB) / 10 ** 12} {value.bSymbol}
              </Card.Text>
              <Card.Text>
                Соотношение цен: {Number(value.tokenAWithPrice) / 10 ** 18} ETH{' '}
                {Number(value.tokenBWithPrice) / 10 ** 18} ETH
              </Card.Text>
              <Card.Text>Общая цена пула: {Number(value.allTokens) / 10 ** 18} ETH</Card.Text>
            </Card.Body>
            <SwapTokens aName={value.aSymbol} poolAddres={value.poolAddres} />
          </Card>
        ))}
      </div>
    </>
  )
}
export { PoolInform }
