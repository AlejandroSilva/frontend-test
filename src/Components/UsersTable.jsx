import React from 'react'
import './UsersTable.scss'

const UsersTable = ()=> {
  return (
    <table className={'UsersTable'}>
      <thead className="UsersTable__thead">
        <tr>
          <th className={'UsersTable__th'}>Nombre</th>
          <th className={'UsersTable__th'}>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {(new Array(10)).fill('-').map(()=>
          <tr key={Math.random()}>
            <td className={'UsersTable__td'}>
              <div className="user-data">
                <img className={'user-data__image'} src="https://place-hold.it/50x50" alt=""/>
                <div>
                  <p className={'user-data__name'}><strong>Jhon Doe Lorem</strong></p>
                  <a className={'user-data__delete'} target='#'>Eliminar</a>
                </div>
              </div>
            </td>
            <td className={'UsersTable__td'}>
              <span className={'user-data__description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut dolore doloremque, ea esse est ipsa libero necessitatibus nihil nobis rerum sequi soluta temporibus. Inventore libero provident sunt suscipit vero?</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UsersTable