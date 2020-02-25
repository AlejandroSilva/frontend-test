import React from 'react'
import './App.scss'
import UsersDashboard from './UsersDashboard'

const App = ()=> {
  return (
    <main className={'App'}>
      <header className={'App__header container'}>
        <h3>Test <strong>Beetrack</strong></h3>
      </header>
      <UsersDashboard />
    </main>
  )
}

export default App
