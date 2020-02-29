import React from 'react'
import './UsersTable.scss'
import {FALLBACK_USER_IMG} from '../constants/constants'

const UsersTable = ({users})=> {
  return (
    <table className={'UsersTable'}>
      <thead className="UsersTable__thead">
        <tr>
          <th className={'UsersTable__th'}>Nombre</th>
          <th className={'UsersTable__th'}>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>
          <tr key={user.id}>
            <td className={'UsersTable__td'}>
              <div className="user-data">
                <div className={'user-data__image'} style={{
                  backgroundImage: `url('${user.photo}'), url(${FALLBACK_USER_IMG})`
                }} />
                <div className={'user-data__name-container'}>
                  <p className={'user-data__name'}>
                    <strong>{user.name}</strong>
                  </p>
                  <a className={'user-data__delete'} target='#'>Eliminar</a>
                </div>
              </div>
            </td>
            <td className={'UsersTable__td'}>
              <span className={'user-data__description'}>
                {user.description}
              </span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UsersTable