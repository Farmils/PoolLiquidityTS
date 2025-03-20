import { useGetGlobalContext } from '../../../core/context/Context.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Header = () => {
  const { setWallet, wallet } = useGetGlobalContext()
  const nav = useNavigate()
  const login = async (): Promise<void> => {
    await window.ethereum.request({ method: 'eth_requestAccounts' }).then((data: string) => {
      setWallet(data[0])
      console.log(data[0])
    })
    nav('/pool')
  }
  return (
    <div style={{ backgroundColor: 'rebeccapurple' }} className={'d-flex flex-row justify-content-between'}>
      <p className={'text-white fs-3 text-bold'}>Профессионалы 2025</p>
      <Link to={'/pool'} className={'text-white text-decoration-none fs-3'}>
        Пулы
      </Link>
      {wallet === '' ? (
        <></>
      ) : (
        <>
          <Link to={'/profile'} className={'text-white text-decoration-none fs-3'}>
            Личный кабинет
          </Link>
          <Link to={'/staking'} className={'text-white text-decoration-none fs-3'}>
            Стейкинг
          </Link>
        </>
      )}
      {wallet === '' ? (
        <Button className={'btn btn-warning '} onClick={login}>
          Авторизоваться
        </Button>
      ) : (
        <Button
          className={'btn btn-danger '}
          onClick={() => {
            setWallet('')
            nav('/')
          }}
        >
          Выйти
        </Button>
      )}
    </div>
  )
}
export { Header }
