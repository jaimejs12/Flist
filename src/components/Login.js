import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export function Login() {
  const { isAuthenticated } = useAuth0()
  const { loginWithPopup } = useAuth0()
  return (
    !isAuthenticated && (
      <button onClick={loginWithPopup} className="py-2 px-2 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-blue-400 hover:border-transparent rounded">
        Iniciar Sesión
      </button>
    )
  )
}
