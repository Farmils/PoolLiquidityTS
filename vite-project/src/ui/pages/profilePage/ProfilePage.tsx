import { FC, useEffect } from 'react'
import { Header } from '../../components/header/Header.tsx'
import FactoryService from '../../../service/factoryService/FactoryService.ts'
import { useGetGlobalContext } from '../../../core/context/Context.tsx'
import { Card } from 'react-bootstrap'

const ProfilePage: FC = () => {
  const { wallet, setUserData, userData } = useGetGlobalContext()
  useEffect(() => {
    ;(async () => {
      await FactoryService.getBalances(wallet).then((data) => {
        if (data) {
          setUserData(data)
          console.log(data)
        }
      })
    })()
  }, [])
  return (
    <>
      <Header />
      {userData === null ? (
        <></>
      ) : (
        <Card>
          Балансы
          <Card.Body>
            <Card.Text>{Number(userData.gerdaBalance) / 10 ** 12} GERDA</Card.Text>
            <Card.Text>{Number(userData.krendelBalance) / 10 ** 12} KRENDEL</Card.Text>
            <Card.Text>{Number(userData.rtkBalance) / 10 ** 12} RTK</Card.Text>
            <Card.Text>{Number(userData.lpBalance) / 10 ** 12} PROFI</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
export { ProfilePage }
