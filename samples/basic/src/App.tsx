import React from 'react'
// @ts-ignore
import reactLogo from './assets/react.svg'
// @ts-ignore
import trimbleLogo from './assets/trimble.svg'
import './App.css'
import tidClient from './client/client'
import AuthApp from './components/AuthApp'
import { TIDProvider } from '@trimble-oss/trimble-id-react'

const App = () => {
  const handleRedirect = () => {
    // redirect to home page after login
   // window.location.href = '/'
  }

  return (
    <TIDProvider tidClient={tidClient} onRedirectCallback={handleRedirect} checkRedirectUrlMatch={true}>
      <div>
        <a href='https://trimble.com' target='_blank'>
          <img src={trimbleLogo} className='logo' alt='Trimble logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 style={{ color: '#FBAD26' }}>TID + React</h1>
      <div>
        <AuthApp />
      </div>
    </TIDProvider>
  )
}

export default App