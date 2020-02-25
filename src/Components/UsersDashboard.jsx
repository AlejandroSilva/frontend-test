import React from 'react'
import './UsersDashboard.scss'
import UsersTable from './UsersTable'

const UsersDashboard = ()=> {
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
        <UsersTable />
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