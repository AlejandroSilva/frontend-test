import React, {useEffect} from 'react'
import './UsersDashboard.scss'
import UsersTable from './UsersTable'
import useGetUsers from '../hooks/useGetUsers'
import LineLoader from './line-loader/LineLoader'

const UsersDashboard = ()=> {
  const [usersAsync, getUsers] = useGetUsers()

  useEffect(()=> {
    getUsers()
  }, [])

  return (
    <div className={'UsersDashboard container'}>

      <div className="UsersDashboard__header">
        <div className="Buscar">
          <i className={'icon__search'}>[icon]</i>
          <input className="Buscar__input" placeholder='Buscar contacto' type='text'/>
        </div>

        <button className={'Button--primary'}>
          <i className={'icon__add-circle'}>[icon]</i>
          Nuevo contacto
        </button>
      </div>

      <div className="UsersDashboard__table">
        {usersAsync.isLoading && <LineLoader />}
        {usersAsync.isError && <div className={'UsersDashboard__error'}>
          No se pudo descargar la lista de usuarios
        </div>}
        {usersAsync.isOk && <UsersTable users={usersAsync.value}/>}
      </div>

      <div className="UsersDashboard__paginator">
        <button className={'Button--primary'}>
          [Siguiente pagina]
          <i className={'icon__next-arrow'}>[icon]</i>
        </button>
      </div>
    </div>
  )
}

export default UsersDashboard