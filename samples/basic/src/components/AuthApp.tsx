import React from 'react'
import AuthenticatedComponent from './AuthenticatedComponent'
import UnauthenticatedComponent from './UnauthorizedComponent'
import { useAuth, AuthenticationGuard } from '@trimble-oss/trimble-id-react'

const AuthApp = () => {
  const [showAuthComponent, setShowAuthComponent] = React.useState(false)
  const { isAuthenticated, isLoading, loginWithRedirect, logout , error,user} = useAuth()
  if (isLoading) {
    return <div>Loading credentials...</div>
  }

  const handleLogin = async () => {
    await loginWithRedirect()
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {isAuthenticated && <AuthenticatedComponent />}
      {!isAuthenticated && <UnauthenticatedComponent />}
      {isAuthenticated && (
        <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
          Logout
        </button>
      )}
      {!isAuthenticated && (
        <button className={'login'} onClick={handleLogin} style={{ marginTop: '1rem' }}>
          Login
        </button>
      )}
      <div>
        <button onClick={() => setShowAuthComponent(true)} style={{ marginTop: '1rem' }}>
          View AuthenticationGuard Component
        </button>
      </div>
        {showAuthComponent &&
          <AuthenticationGuard
            renderComponent={<div>This component is guarded by AuthenticationGuard. You will only see this if you have been authenticated.</div>}
            loader={<div>Loading...</div>}
          />
        }
    </div>
  )
}

export default AuthApp