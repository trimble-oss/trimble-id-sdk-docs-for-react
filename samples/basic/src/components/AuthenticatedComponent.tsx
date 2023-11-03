import React from 'react'
import { useAuth } from '@trimble-oss/trimble-id-react'

const AuthenticatedComponent = () => {
  const { user } = useAuth()
  return <div>Hi! 👋 {user?.name}</div>
}

export default AuthenticatedComponent
